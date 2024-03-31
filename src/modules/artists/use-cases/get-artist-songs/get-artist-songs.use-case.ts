import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { ArtistSongAPIResponseModel, ArtistSongModel } from '#modules/artists/models'
import { createSongPayload } from '#modules/songs/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'

export interface GetArtistSongsArgs {
  artistId: string
  page: number
  sortBy: 'popularity' | 'latest' | 'alphabetical'
  sortOrder: 'asc' | 'desc'
}

export class GetArtistSongsUseCase implements IUseCase<GetArtistSongsArgs, z.infer<typeof ArtistSongModel>> {
  constructor() {}

  async execute({ artistId, page, sortOrder, sortBy }: GetArtistSongsArgs) {
    const response = await useFetch<z.infer<typeof ArtistSongAPIResponseModel>>({
      endpoint: Endpoints.artists.songs,
      params: {
        artistId,
        page,
        sort_order: sortOrder,
        category: sortBy
      }
    })

    if (!response) throw new HTTPException(404, { message: 'artist songs not found' })

    return {
      total: response.topSongs.total,
      songs: response.topSongs.songs.map((song) => createSongPayload(song))
    }
  }
}
