import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'
import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { SearchArtistAPIResponseModel, SearchArtistModel } from '#modules/search/models'
import type { z } from 'zod'

export interface SearchArtistsArgs {
  query: string
  page: number
  limit: number
}

export class SearchArtistsUseCase implements IUseCase<SearchArtistsArgs, z.infer<typeof SearchArtistModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchArtistsArgs): Promise<z.infer<typeof SearchArtistModel>> {
    const { data } = await useFetch<z.infer<typeof SearchArtistAPIResponseModel>>({
      endpoint: Endpoints.search.artists,
      params: {
        q: query,
        p: page,
        n: limit
      }
    })

    if (!data) throw new HTTPException(404, { message: 'artist not found' })

    return {
      total: data.total,
      start: data.start,
      results: data.results?.map(createArtistMapPayload).slice(0, limit) || []
    }
  }
}
