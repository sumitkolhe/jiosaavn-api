import {
  GetArtistAlbumsUseCase,
  GetArtistByIdUseCase,
  GetArtistByLinkUseCase,
  GetArtistSongsUseCase,
  type GetArtistAlbumsArgs,
  type GetArtistByIdArgs,
  type GetArtistByLinkArgs,
  type GetArtistSongsArgs
} from '#modules/artists/use-cases'

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
