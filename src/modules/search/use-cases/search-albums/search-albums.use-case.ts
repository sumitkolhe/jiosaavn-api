import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { IUseCase } from '../../../../common/types'
import { createAlbumPayload } from '../../../albums/helpers'
import { SearchAlbum, SearchAlbumAPIResponse } from '../../types'

export interface SearchAlbumsArgs {
  query: string
  page: number
  limit: number
}

export class SearchAlbumsUseCase implements IUseCase<SearchAlbumsArgs, SearchAlbum> {
  constructor() {}

  async execute({ query, limit, page }: SearchAlbumsArgs): Promise<SearchAlbum> {
    const response = await useFetch<SearchAlbumAPIResponse>(Endpoints.search.albums, { q: query, p: page, n: limit })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return {
      total: response.total,
      start: response.start,
      results: response.results?.map(createAlbumPayload).slice(0, limit) || [],
    }
  }
}
