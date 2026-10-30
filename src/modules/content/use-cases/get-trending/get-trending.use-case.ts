import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongPayload } from '#modules/songs/helpers'

export class GetTrendingUseCase {
  async execute() {
    const { data } = await useFetch<any>({
      endpoint: Endpoints.trending,
      params: {}
    })

    return {
      results: data?.results?.map(createSongPayload) || []
    }
  }
}
