import { GetSongByIdUseCase, GetSongByLinkUseCase, GetSongLyricsUseCase, GetSongSuggestionsUseCase } from '../use-cases'
import { CreateSongStationUseCase } from '../use-cases/create-song-station'
import type { GetSongByIdArgs, GetSongSuggestionsArgs } from '../use-cases'

export class SongService {
  private readonly getSongByIdUseCase: GetSongByIdUseCase
  private readonly getSongByLinkUseCase: GetSongByLinkUseCase
  private readonly getSongLyricsUseCase: GetSongLyricsUseCase
  private readonly createSongStationUseCase: CreateSongStationUseCase
  private readonly getSongSuggestionsUseCase: GetSongSuggestionsUseCase

  constructor() {
    this.getSongByIdUseCase = new GetSongByIdUseCase()
    this.getSongByLinkUseCase = new GetSongByLinkUseCase()
    this.getSongLyricsUseCase = new GetSongLyricsUseCase()
    this.createSongStationUseCase = new CreateSongStationUseCase()
    this.getSongSuggestionsUseCase = new GetSongSuggestionsUseCase()
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

  createSongStation = async (songIds: string) => {
    return this.createSongStationUseCase.execute(songIds)
  }

  getSongSuggestions = async (args: GetSongSuggestionsArgs) => {
    return this.getSongSuggestionsUseCase.execute(args)
  }
}
