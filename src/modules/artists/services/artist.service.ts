import {
  GetAlbumByLinkUseCase,
  GetArtistAlbumsUseCase,
  GetArtistByIdUseCase,
  GetArtistSongsUseCase
} from '../use-cases'
import type { GetArtistAlbumsArgs, GetArtistByIdArgs, GetArtistSongsArgs } from '../use-cases'

export class ArtistService {
  private readonly getAlbumByIdUseCase: GetArtistByIdUseCase
  private readonly getAlbumByLinkUseCase: GetAlbumByLinkUseCase
  private readonly getArtistSongsUseCase: GetArtistSongsUseCase
  private readonly getArtistAlbumsUseCase: GetArtistAlbumsUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetArtistByIdUseCase()
    this.getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
    this.getArtistSongsUseCase = new GetArtistSongsUseCase()
    this.getArtistAlbumsUseCase = new GetArtistAlbumsUseCase()
  }

  getArtistById = async (args: GetArtistByIdArgs) => {
    return this.getAlbumByIdUseCase.execute(args)
  }

  getArtistByLink = async (albumLink: string) => {
    return this.getAlbumByLinkUseCase.execute(albumLink)
  }

  getArtistSongs = async (args: GetArtistSongsArgs) => {
    return this.getArtistSongsUseCase.execute(args)
  }

  getArtistAlbums = async (args: GetArtistAlbumsArgs) => {
    return this.getArtistAlbumsUseCase.execute(args)
  }
}
