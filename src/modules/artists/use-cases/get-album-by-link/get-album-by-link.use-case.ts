import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createArtistPayload } from '../../helpers'
import type { Artist, ArtistAPIResponse } from '../../types'
import type { IUseCase } from '../../../../common/types'

export class GetAlbumByLinkUseCase implements IUseCase<String, Artist> {
  constructor() {}

  async execute(token: string) {
    const response = await useFetch<ArtistAPIResponse>(Endpoints.artists.link, {
      token,
      type: 'artist'
    })

    if (!response) throw new HTTPException(404, { message: 'artist not found' })

    return createArtistPayload(response)
  }
}
