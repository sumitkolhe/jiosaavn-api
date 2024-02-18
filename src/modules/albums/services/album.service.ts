import { GetAlbumByIdUseCase, GetAlbumByLinkUseCase } from '../use-cases'

export class AlbumService {
  private readonly getAlbumByIdUseCase: GetAlbumByIdUseCase
  private readonly getAlbumByLinkUseCase: GetAlbumByLinkUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetAlbumByIdUseCase()
    this.getAlbumByLinkUseCase = new GetAlbumByLinkUseCase()
  }

  getAlbumById = async (albumId: string) => {
    return this.getAlbumByIdUseCase.execute(albumId)
  }

  getAlbumByLink = async (albumLink: string) => {
    return this.getAlbumByLinkUseCase.execute(albumLink)
  }
}
