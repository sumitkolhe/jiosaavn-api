import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models'
import { createAlbumPayload } from '#modules/albums/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'

export class GetAlbumByIdUseCase implements IUseCase<string, z.infer<typeof AlbumModel>> {
  constructor() {}

  async execute(id: string) {
    const { data } = await useFetch<z.infer<typeof AlbumAPIResponseModel>>({
      endpoint: Endpoints.albums.id,
      params: { albumid: id }
    })

    if (!data) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(data)
  }
}
