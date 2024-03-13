import {
  type GetArtistAlbumsArgs,
  GetArtistAlbumsUseCase,
  type GetArtistByIdArgs,
  GetArtistByIdUseCase,
  type GetArtistByLinkArgs,
  type GetArtistSongsArgs,
  GetArtistSongsUseCase
} from '../use-cases'
import { GetArtistByLinkUseCase } from '../use-cases/get-artist-by-link'

export class ArtistService {
  private readonly getArtistByIdUseCase: GetArtistByIdUseCase
  private readonly getArtistByLinkUseCase: GetArtistByLinkUseCase
  private readonly getArtistSongsUseCase: GetArtistSongsUseCase
  private readonly getArtistAlbumsUseCase: GetArtistAlbumsUseCase

  constructor() {
    this.getArtistByIdUseCase = new GetArtistByIdUseCase()
    this.getArtistByLinkUseCase = new GetArtistByLinkUseCase()
    this.getArtistSongsUseCase = new GetArtistSongsUseCase()
    this.getArtistAlbumsUseCase = new GetArtistAlbumsUseCase()
  }

  getArtistById = (args: GetArtistByIdArgs) => {
    return this.getArtistByIdUseCase.execute(args)
  }

  getArtistByLink = (args: GetArtistByLinkArgs) => {
    return this.getArtistByLinkUseCase.execute(args)
  }

  getArtistSongs = (args: GetArtistSongsArgs) => {
    return this.getArtistSongsUseCase.execute(args)
  }

  getArtistAlbums = (args: GetArtistAlbumsArgs) => {
    return this.getArtistAlbumsUseCase.execute(args)
  }
}
