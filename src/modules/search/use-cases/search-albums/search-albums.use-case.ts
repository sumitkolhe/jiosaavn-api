import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { SearchAlbumAPIResponseModel, SearchAlbumModel } from '#modules/search/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createAlbumPayload } from '#modules/albums/helpers'

export interface SearchAlbumsArgs {
  query: string
  page: number
  limit: number
}

export class SearchAlbumsUseCase implements IUseCase<SearchAlbumsArgs, z.infer<typeof SearchAlbumModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchAlbumsArgs): Promise<z.infer<typeof SearchAlbumModel>> {
    const response = await useFetch<z.infer<typeof SearchAlbumAPIResponseModel>>(Endpoints.search.albums, {
      q: query,
      p: page,
      n: limit
    })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return {
      total: response.total,
      start: response.start,
      results: response.results?.map(createAlbumPayload).slice(0, limit) || []
    }
  }
}
