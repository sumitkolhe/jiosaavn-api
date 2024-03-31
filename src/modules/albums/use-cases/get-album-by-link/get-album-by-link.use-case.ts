import { HTTPException } from 'hono/http-exception'
import type { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import { createAlbumPayload } from '#modules/albums/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'

export class GetAlbumByLinkUseCase implements IUseCase<string, z.infer<typeof AlbumModel>> {
  constructor() {}

  async execute(token: string) {
    const { data } = await useFetch<z.infer<typeof AlbumAPIResponseModel>>({
      endpoint: Endpoints.albums.link,
      params: {
        token,
        type: 'album'
      }
    })

    if (!data) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(data)
  }
}
