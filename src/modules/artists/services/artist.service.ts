import { GetAlbumByLinkUseCase, GetArtistByIdUseCase, GetArtistSongsUseCase } from '../use-cases'
import type { GetArtistByIdArgs, GetArtistSongsArgs } from '../use-cases'

export class ArtistService {
  private readonly getAlbumByIdUseCase: GetArtistByIdUseCase
  private readonly getAlbumByLinkUseCase: GetAlbumByLinkUseCase
  private readonly getArtistSongsUseCase: GetArtistSongsUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetArtistByIdUseCase()
    this.getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
    this.getArtistSongsUseCase = new GetArtistSongsUseCase()
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
}
