import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createAlbumPayload } from '../../helpers'
import type { AlbumAPIResponseModel, AlbumModel } from '../../models'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'

export class GetAlbumByLinkUseCase implements IUseCase<String, z.infer<typeof AlbumModel>> {
  constructor() {}

  async execute(token: string) {
    const response = await useFetch<z.infer<typeof AlbumAPIResponseModel>>(Endpoints.albums.link, {
      token,
      type: 'album'
    })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(response)
  }
}
