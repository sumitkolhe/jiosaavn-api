import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { interleaveFeedSongs, sortFeedSongs } from '#modules/content/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import type { IUseCase } from '#common/types'
import type { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import type { z } from 'zod'

type Song = z.infer<typeof SongModel>

/**
 * Shape of the browse-modules response we care about. `new_albums` is a mixed
 * list of songs and albums despite the name; only the songs are usable here.
 */
interface BrowseModulesResponse {
  new_albums?: (z.infer<typeof SongAPIResponseModel> & { type?: string })[]
}

export interface GetNewReleasesArgs {
  /** One or more JioSaavn language keys, e.g. ['tamil']. */
  languages: string[]
  limit: number
}

/**
 * Genuinely recent releases, from the `new_albums` section of JioSaavn's browse
 * modules — the same list their own home page shows.
 *
 * Two things about this endpoint are worth knowing:
 *
 *  1. It ignores a `language` query parameter completely and always answers in
 *     hindi. The listener's languages come from an `L` cookie instead, which is
 *     why this passes `cookie` rather than a param.
 *  2. `new_albums` mixes entries of type "song" and type "album". The songs
 *     carry a full `more_info` block (encrypted_media_url included) so they map
 *     straight through `createSongPayload`. The albums carry no media url and
 *     would each need a separate lookup, so they are skipped — every language
 *     still yields more songs than a home row asks for.
 *
 * Unlike the trending feed, this really is fresh: at the time of writing the
 * tamil list spans the previous seven weeks.
 */
export class GetNewReleasesUseCase implements IUseCase<GetNewReleasesArgs, Song[]> {
  constructor() {}

  async execute({ languages, limit }: GetNewReleasesArgs): Promise<Song[]> {
    const settled = await Promise.allSettled(languages.map((language) => this.fetchLanguage(language)))

    const lists = settled
      .filter((result): result is PromiseFulfilledResult<Song[]> => result.status === 'fulfilled')
      .map((result) => result.value)
      .filter((songs) => songs.length > 0)
      .map((songs) => sortFeedSongs(songs, 'newest'))

    return interleaveFeedSongs(lists, limit)
  }

  private async fetchLanguage(language: string): Promise<Song[]> {
    const { data, ok } = await useFetch<BrowseModulesResponse>({
      endpoint: Endpoints.modules,
      params: {},
      cookie: `L=${language}`
    })

    if (!ok || !Array.isArray(data?.new_albums)) return []

    return data.new_albums
      .filter((entry) => entry?.type === 'song' && entry?.id && entry?.more_info?.encrypted_media_url)
      .map(createSongPayload)
  }
}
