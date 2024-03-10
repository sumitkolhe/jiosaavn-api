import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createAlbumPayload } from '../../helpers'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'
import type { AlbumAPIResponseModel, AlbumModel } from '../../models'

export class GetAlbumByIdUseCase implements IUseCase<String, z.infer<typeof AlbumModel>> {
  constructor() {}

  async execute(id: string) {
    const response = await useFetch<z.infer<typeof AlbumAPIResponseModel>>(Endpoints.albums.id, { albumid: id })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(response)
  }
}
