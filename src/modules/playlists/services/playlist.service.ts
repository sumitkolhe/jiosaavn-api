import {
  GetPlaylistByIdUseCase,
  GetPlaylistByLinkUseCase,
  type GetPlaylistByIdArgs,
  type GetPlaylistByLinkArgs
} from '#modules/playlists/use-cases'

export class PlaylistService {
  private readonly getPlaylistByIdUseCase: GetPlaylistByIdUseCase
  private readonly getPlaylistByLinkUseCase: GetPlaylistByLinkUseCase

  constructor() {
    this.getPlaylistByIdUseCase = new GetPlaylistByIdUseCase()
    this.getPlaylistByLinkUseCase = new GetPlaylistByLinkUseCase()
  }

  getPlaylistById = (args: GetPlaylistByIdArgs) => {
    return this.getPlaylistByIdUseCase.execute(args)
  }

  getPlaylistByLink = (args: GetPlaylistByLinkArgs) => {
    return this.getPlaylistByLinkUseCase.execute(args)
  }
}
