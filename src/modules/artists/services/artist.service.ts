import { GetAlbumByLinkUseCase, GetArtistByIdUseCase } from '../use-cases'

export class ArtistService {
  private readonly getAlbumByIdUseCase: GetArtistByIdUseCase
  private readonly getAlbumByLinkUseCase: GetAlbumByLinkUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetArtistByIdUseCase()
    this.getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
  }

  getArtistById = async (albumId: string) => {
    return this.getAlbumByIdUseCase.execute(albumId)
  }

  getArtistByLink = async (albumLink: string) => {
    return this.getAlbumByLinkUseCase.execute(albumLink)
  }
}
