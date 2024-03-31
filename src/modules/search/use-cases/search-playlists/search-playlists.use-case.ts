import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { z } from 'zod'
import type { SearchPlaylistAPIResponseModel, SearchPlaylistModel } from '#modules/search/models'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { createSearchPlaylistPayload } from '#modules/search/helpers'

export interface SearchPlaylistsArgs {
  query: string
  page: number
  limit: number
}

export class SearchPlaylistsUseCase implements IUseCase<SearchPlaylistsArgs, z.infer<typeof SearchPlaylistModel>> {
  constructor() {}

  async execute({ query, limit, page }: SearchPlaylistsArgs): Promise<z.infer<typeof SearchPlaylistModel>> {
    const { data } = await useFetch<z.infer<typeof SearchPlaylistAPIResponseModel>>({
      endpoint: Endpoints.search.playlists,
      params: {
        q: query,
        p: page,
        n: limit
      }
    })

    if (!data) throw new HTTPException(404, { message: 'playlist not found' })

    return createSearchPlaylistPayload(data)
  }
}
