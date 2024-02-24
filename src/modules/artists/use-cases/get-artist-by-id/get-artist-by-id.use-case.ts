import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createArtistPayload } from '../../helpers'
import type { Artist, ArtistAPIResponse } from '../../types'
import type { IUseCase } from '../../../../common/types'

export interface GetArtistByIdArgs {
  artistId: string
  page: number
  songCount: number
  albumCount: number
  sortBy: 'popularity' | 'latest' | 'alphabetical'
  sortOrder: 'asc' | 'desc'
}

export class GetArtistByIdUseCase implements IUseCase<GetArtistByIdArgs, Artist> {
  constructor() {}

  async execute({ artistId, page, songCount, albumCount, sortBy, sortOrder }: GetArtistByIdArgs) {
    const response = await useFetch<ArtistAPIResponse>(Endpoints.artists.id, {
      artistId,
      n_song: songCount,
      n_album: albumCount,
      page,
      sort_order: sortOrder,
      category: sortBy,
      n_single: 1
    })

    if (!response) throw new HTTPException(404, { message: 'artist not found' })

    return createArtistPayload(response)
  }
}
