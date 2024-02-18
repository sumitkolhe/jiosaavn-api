import { GetSongByIdUseCase, GetSongByLinkUseCase, GetSongLyricsUseCase } from '../use-cases'
import type { GetSongByIdArgs } from '../use-cases'

export class SongService {
  private readonly getSongByIdUseCase: GetSongByIdUseCase
  private readonly getSongByLinkUseCase: GetSongByLinkUseCase
  private readonly getSongLyricsUseCase: GetSongLyricsUseCase

  constructor() {
    this.getSongByIdUseCase = new GetSongByIdUseCase()
    this.getSongByLinkUseCase = new GetSongByLinkUseCase()
    this.getSongLyricsUseCase = new GetSongLyricsUseCase()
  }

  getSongByIds = async (args: GetSongByIdArgs) => {
    return this.getSongByIdUseCase.execute(args)
  }

  getSongByLink = async (songLink: string) => {
    return this.getSongByLinkUseCase.execute(songLink)
  }

  getSongLyrics = async (songId: string) => {
    return this.getSongLyricsUseCase.execute(songId)
  }
}
