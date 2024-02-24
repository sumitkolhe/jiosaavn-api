import { GetArtistAlbumsUseCase, GetArtistByIdUseCase, GetArtistSongsUseCase } from '../use-cases'
import { GetArtistByLinkUseCase } from '../use-cases/get-artist-by-link'
import type { GetArtistAlbumsArgs, GetArtistByIdArgs, GetArtistByLinkArgs, GetArtistSongsArgs } from '../use-cases'

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

  getArtistById = async (args: GetArtistByIdArgs) => {
    return this.getArtistByIdUseCase.execute(args)
  }

  getArtistByLink = async (args: GetArtistByLinkArgs) => {
    return this.getArtistByLinkUseCase.execute(args)
  }

  getArtistSongs = async (args: GetArtistSongsArgs) => {
    return this.getArtistSongsUseCase.execute(args)
  }

  getArtistAlbums = async (args: GetArtistAlbumsArgs) => {
    return this.getArtistAlbumsUseCase.execute(args)
  }
}
