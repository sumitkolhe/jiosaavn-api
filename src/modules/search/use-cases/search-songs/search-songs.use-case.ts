import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { GetNewReleasesUseCase, GetTrendingSongsUseCase } from '#modules/content/use-cases'
import { resolveFeedAlias } from '#modules/search/helpers'
import { createSongPayload } from '#modules/songs/helpers'
import type { IUseCase } from '#common/types'
import type { SearchSongAPIResponseModel, SearchSongModel } from '#modules/search/models'
import type { z } from 'zod'

export interface SearchSongsArgs {
  query: string
  page: number
  limit: number
  /**
   * Raw `languages` query param forwarded by the VibeUp client. Only consulted
   * by the home-feed alias; ordinary searches ignore it entirely.
   */
  languages?: string
  /** Kill switch — see FEED_ALIASES_ENABLED in wrangler.toml. */
  aliasEnabled?: boolean
}

export class SearchSongsUseCase implements IUseCase<SearchSongsArgs, z.infer<typeof SearchSongModel>> {
  private readonly getTrendingSongsUseCase: GetTrendingSongsUseCase
  private readonly getNewReleasesUseCase: GetNewReleasesUseCase

  constructor() {
    this.getTrendingSongsUseCase = new GetTrendingSongsUseCase()
    this.getNewReleasesUseCase = new GetNewReleasesUseCase()
  }

  async execute({
    query,
    limit,
    page,
    languages,
    aliasEnabled = true
  }: SearchSongsArgs): Promise<z.infer<typeof SearchSongModel>> {
    if (aliasEnabled) {
      const feed = await this.feedFor(query, limit, languages)
      if (feed) return feed
    }

    const { data } = await useFetch<z.infer<typeof SearchSongAPIResponseModel>>({
      endpoint: Endpoints.search.songs,
      params: {
        q: query,
        p: page,
        n: limit
      }
    })

    return {
      total: data.total,
      start: data.start,
      results: data.results?.map(createSongPayload).slice(0, limit) || []
    }
  }

  /**
   * Serves a real JioSaavn feed when `query` is one of the VibeUp client's
   * hardcoded home-feed strings, picking the source the row actually needs.
   *
   * Returns null — meaning "fall through to normal search" — for every other
   * query, and also whenever the feed fails or comes back empty. That fallback
   * is deliberate: the home screen must never end up worse than it was before
   * this alias existed.
   */
  private async feedFor(
    query: string,
    limit: number,
    languages?: string
  ): Promise<z.infer<typeof SearchSongModel> | null> {
    const alias = resolveFeedAlias(query, languages)
    if (!alias) return null

    try {
      const results =
        alias.source === 'new-releases'
          ? await this.getNewReleasesUseCase.execute({ languages: alias.languages, limit })
          : await this.getTrendingSongsUseCase.execute({
              languages: alias.languages,
              sort: alias.sort,
              limit
            })

      if (!results.length) return null

      return { total: results.length, start: 0, results }
    } catch {
      return null
    }
  }
}
