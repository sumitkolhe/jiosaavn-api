import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { interleaveFeedSongs, sortFeedSongs, type FeedSort } from '#modules/content/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import type { IUseCase } from '#common/types'
import type { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import type { z } from 'zod'

type Song = z.infer<typeof SongModel>

export interface GetTrendingSongsArgs {
  /** One or more JioSaavn language keys, e.g. ['tamil', 'hindi']. */
  languages: string[]
  sort: FeedSort
  limit: number
}

/**
 * JioSaavn's own trending feed — the list their app and website show, not a
 * text search. Returns roughly 24 songs per language.
 *
 * `entity_language` is required: calling content.getTrending without it returns
 * an empty list, which is why every caller has to supply at least one language.
 *
 * The upstream objects are the same shape as search results, so `createSongPayload`
 * maps them without a dedicated model.
 */
export class GetTrendingSongsUseCase implements IUseCase<GetTrendingSongsArgs, Song[]> {
  constructor() {}

  async execute({ languages, sort, limit }: GetTrendingSongsArgs): Promise<Song[]> {
    const settled = await Promise.allSettled(languages.map((language) => this.fetchLanguage(language)))

    // A language that fails or comes back empty is dropped; the rest still make
    // a usable feed.
    const lists = settled
      .filter((result): result is PromiseFulfilledResult<Song[]> => result.status === 'fulfilled')
      .map((result) => result.value)
      .filter((songs) => songs.length > 0)
      .map((songs) => sortFeedSongs(songs, sort))

    return interleaveFeedSongs(lists, limit)
  }

  private async fetchLanguage(language: string): Promise<Song[]> {
    const { data, ok } = await useFetch<z.infer<typeof SongAPIResponseModel>[]>({
      endpoint: Endpoints.trending,
      params: { entity_type: 'song', entity_language: language }
    })

    if (!ok || !Array.isArray(data)) return []

    // Without an encrypted media url a song has no download links, so it would
    // reach the client unplayable.
    return data.filter((song) => song?.id && song?.more_info?.encrypted_media_url).map(createSongPayload)
  }
}
