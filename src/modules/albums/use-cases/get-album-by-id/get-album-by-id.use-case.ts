import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createAlbumPayload } from '../../helpers'
import type { IUseCase } from '../../../../common/types'
import type { Album, AlbumAPIResponse } from '../../types'

export class GetAlbumByIdUseCase implements IUseCase<String, Album> {
  constructor() {}

  async execute(id: string) {
    const response = await useFetch<AlbumAPIResponse>(Endpoints.albums.id, { albumid: id })

    if (!response) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(response)
  }
}
