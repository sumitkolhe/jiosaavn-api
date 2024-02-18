import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createAlbumPayload } from '../../helpers'
import type { IUseCase } from '../../../../common/types'
import type { Album, AlbumAPIResponse } from '../../types'

export class GetAlbumByLinkUseCase implements IUseCase<String, Album> {
  constructor() {}

  async execute(albumLink: string) {
    const response = await useFetch<AlbumAPIResponse>(Endpoints.albums.link, {
      token: albumLink,
      type: 'album'
    })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(response)
  }
}
