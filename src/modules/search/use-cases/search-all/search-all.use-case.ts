import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { IUseCase } from '../../../../common/types'
import { createSearchPayload } from '../../helpers/search.helper'
import { Search, SearchAPIResponse } from '../../types'

export class SearchAllUseCase implements IUseCase<String, Search> {
  async execute(query: string): Promise<Search> {
    const response = await useFetch<SearchAPIResponse>(Endpoints.search.all, { query })

    if (!response) throw new HTTPException(404, { message: `no results found for ${query}` })

    return createSearchPayload(response)
  }
}
