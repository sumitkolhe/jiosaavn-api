import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { SearchSongAPIResponseModel, SearchSongModel } from '#modules/search/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongPayload } from '#modules/songs/helpers'

export interface SearchSongsArgs {
  query: string
  page: number
  limit: number
}

export class SearchSongsUseCase implements IUseCase<SearchSongsArgs, z.infer<typeof SearchSongModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchSongsArgs): Promise<z.infer<typeof SearchSongModel>> {
    const response = await useFetch<z.infer<typeof SearchSongAPIResponseModel>>(Endpoints.search.songs, {
      q: query,
      p: page,
      n: limit
    })

    if (!response) throw new HTTPException(404, { message: 'song not found' })

    return {
      total: response.total,
      start: response.start,
      results: response.results?.map(createSongPayload).slice(0, limit) || []
    }
  }
}
