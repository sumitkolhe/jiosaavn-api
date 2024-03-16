import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { z } from 'zod'
import type { SearchAPIResponseModel, SearchModel } from '#modules/search/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSearchPayload } from '#modules/search/helpers'

export class SearchAllUseCase implements IUseCase<string, z.infer<typeof SearchModel>> {
  async execute(query: string): Promise<z.infer<typeof SearchModel>> {
    const response = await useFetch<z.infer<typeof SearchAPIResponseModel>>(Endpoints.search.all, { query })

    if (!response) throw new HTTPException(404, { message: `no results found for ${query}` })

    return createSearchPayload(response)
  }
}
