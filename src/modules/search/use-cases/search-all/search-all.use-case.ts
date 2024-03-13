import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSearchPayload } from '../../helpers'
import type { IUseCase } from '../../../../common/types'
import type { z } from 'zod'
import type { SearchAPIResponseModel, SearchModel } from '../../models'

export class SearchAllUseCase implements IUseCase<string, z.infer<typeof SearchModel>> {
  async execute(query: string): Promise<z.infer<typeof SearchModel>> {
    const response = await useFetch<z.infer<typeof SearchAPIResponseModel>>(Endpoints.search.all, { query })

    if (!response) throw new HTTPException(404, { message: `no results found for ${query}` })

    return createSearchPayload(response)
  }
}
