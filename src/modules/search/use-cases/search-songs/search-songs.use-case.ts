import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { IUseCase } from '../../../../common/types'
import { createSongPayload } from '../../../songs/helpers'
import { SearchSong, SearchSongAPIResponse } from '../../types'

export interface SearchSongsArgs {
  query: string
  page: number
  limit: number
}

export class SearchSongsUseCase implements IUseCase<SearchSongsArgs, SearchSong> {
  constructor() {}

  async execute({ query, limit, page }: SearchSongsArgs): Promise<SearchSong> {
    const response = await useFetch<SearchSongAPIResponse>(Endpoints.search.songs, { q: query, p: page, n: limit })

    if (!response) throw new HTTPException(404, { message: 'song not found' })

    return {
      total: response.total,
      start: response.start,
      results: response.results?.map(createSongPayload).slice(0, limit) || []
    }
  }
}
