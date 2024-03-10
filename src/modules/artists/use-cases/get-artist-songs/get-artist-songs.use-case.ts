import { HTTPException } from 'hono/http-exception'
import { Endpoints } from '../../../../common/constants'
import { useFetch } from '../../../../common/helpers'
import { createSongPayload } from '../../../songs/helpers'
import type { z } from 'zod'
import type { IUseCase } from '../../../../common/types'
import type { ArtistSongAPIResponseModel, ArtistSongModel } from '../../models'

export interface GetArtistSongsArgs {
  artistId: string
  page: number
  sortBy: 'popularity' | 'latest' | 'alphabetical'
  sortOrder: 'asc' | 'desc'
}

export class GetArtistSongsUseCase implements IUseCase<GetArtistSongsArgs, z.infer<typeof ArtistSongModel>> {
  constructor() {}

  async execute({ artistId, page, sortOrder, sortBy }: GetArtistSongsArgs) {
    const response = await useFetch<z.infer<typeof ArtistSongAPIResponseModel>>(Endpoints.artists.songs, {
      artistId,
      page,
      sort_order: sortOrder,
      category: sortBy
    })

    if (!response) throw new HTTPException(404, { message: 'artist songs not found' })

    return {
      total: response.topSongs.total,
      songs: response.topSongs.songs.map((song) => createSongPayload(song))
    }
  }
}
