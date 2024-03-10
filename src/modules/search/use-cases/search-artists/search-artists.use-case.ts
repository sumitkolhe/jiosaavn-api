import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { IUseCase } from '../../../../common/types'
import { z } from 'zod'
import { SearchArtistAPIResponseModel, SearchArtistModel } from '../../models'
import { createArtistPayload } from '../../../artists/helpers'

export interface SearchArtistsArgs {
  query: string
  page: number
  limit: number
}

export class SearchArtistsUseCase implements IUseCase<SearchArtistsArgs, z.infer<typeof SearchArtistModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchArtistsArgs): Promise<z.infer<typeof SearchArtistModel>> {
    const response = await useFetch<z.infer<typeof SearchArtistAPIResponseModel>>(Endpoints.search.artists, {
      q: query,
      p: page,
      n: limit
    })

    console.log(response)

    if (!response) throw new HTTPException(404, { message: 'artist not found' })

    return {
      total: response.total,
      start: response.start,
      results: response.results?.map(createArtistPayload).slice(0, limit) || []
    }
  }
}
