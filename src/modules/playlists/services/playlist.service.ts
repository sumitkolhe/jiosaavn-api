import { GetPlaylistByIdUseCase, GetPlaylistByLinkUseCase } from '#modules/playlists/use-cases'

export class PlaylistService {
  private readonly getPlaylistByIdUseCase: GetPlaylistByIdUseCase
  private readonly getPlaylistByLinkUseCase: GetPlaylistByLinkUseCase

  constructor() {
    this.getPlaylistByIdUseCase = new GetPlaylistByIdUseCase()
    this.getPlaylistByLinkUseCase = new GetPlaylistByLinkUseCase()
  }

  getPlaylistById = (playlistId: string) => {
    return this.getPlaylistByIdUseCase.execute(playlistId)
  }

  getPlaylistByLink = (token: string) => {
    return this.getPlaylistByLinkUseCase.execute(token)
  }
}
