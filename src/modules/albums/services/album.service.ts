import { GetAlbumByIdUseCase, GetAlbumByLinkUseCase } from '#modules/albums/use-cases'

export class AlbumService {
  private readonly getAlbumByIdUseCase: GetAlbumByIdUseCase
  private readonly getAlbumByLinkUseCase: GetAlbumByLinkUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetAlbumByIdUseCase()
    this.getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
  }

  getAlbumById = (albumId: string) => {
    return this.getAlbumByIdUseCase.execute(albumId)
  }

  getAlbumByLink = (albumLink: string) => {
    return this.getAlbumByLinkUseCase.execute(albumLink)
  }
}
