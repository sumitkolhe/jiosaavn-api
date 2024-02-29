import { GetSongByIdUseCase, GetSongByLinkUseCase, GetSongLyricsUseCase, GetSongSuggestionsUseCase } from '../use-cases'
import { CreateSongStationUseCase } from '../use-cases/create-song-station'
import type { SongModel } from '../models/song.model'
import type { z } from 'zod'
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

  getSongByIds = async (args: GetSongByIdArgs): Promise<z.infer<typeof SongModel>[]> => {
    return this.getSongByIdUseCase.execute(args)
  }

  getSongByLink = async (token: string): Promise<z.infer<typeof SongModel>[]> => {
    return this.getSongByLinkUseCase.execute(token)
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
