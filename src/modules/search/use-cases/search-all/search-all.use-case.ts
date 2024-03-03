import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { IUseCase } from '../../../../common/types'
import { createSearchPayload } from '../../helpers'
import { z } from 'zod'
import { SearchAPIResponseModel, SearchModel } from '../../models'

export class SearchAllUseCase implements IUseCase<String, z.infer<typeof SearchModel>> {
  async execute(query: string): Promise<z.infer<typeof SearchModel>> {
    const response = await useFetch<z.infer<typeof SearchAPIResponseModel>>(Endpoints.search.all, { query })

    if (!response) throw new HTTPException(404, { message: `no results found for ${query}` })

    return createSearchPayload(response)
  }
}
