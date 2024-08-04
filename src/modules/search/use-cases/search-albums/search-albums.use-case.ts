import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSearchAlbumPayload } from '#modules/search/helpers'
import type { IUseCase } from '#common/types'
import type { SearchAlbumAPIResponseModel, SearchAlbumModel } from '#modules/search/models'
import type { z } from 'zod'

export interface SearchAlbumsArgs {
  query: string
  page: number
  limit: number
}

export class SearchAlbumsUseCase implements IUseCase<SearchAlbumsArgs, z.infer<typeof SearchAlbumModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchAlbumsArgs): Promise<z.infer<typeof SearchAlbumModel>> {
    const { data } = await useFetch<z.infer<typeof SearchAlbumAPIResponseModel>>({
      endpoint: Endpoints.search.albums,
      params: {
        q: query,
        p: page,
        n: limit
      }
    })

    return createSearchAlbumPayload(data)
  }
}
