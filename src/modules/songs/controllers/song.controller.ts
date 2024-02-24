import { SongService } from '../services'
import type { Context } from 'hono'

export class SongController {
  private songService: SongService

  constructor() {
    this.songService = new SongService()
  }

  public getSong = async (ctx: Context) => {
    const { link, id } = ctx.req.valid('query' as never)

    const response = id
      ? await this.songService.getSongByIds({ songIds: id })
      : await this.songService.getSongByLink(link)

    return ctx.json({ success: true, data: response })
  }

  public getSongById = async (ctx: Context) => {
    const songId = ctx.req.param('id')
    const { lyrics } = ctx.req.valid('query' as never)

    const response = await this.songService.getSongByIds({
      songIds: songId,
      includeLyrics: lyrics
    })

    return ctx.json({ success: true, data: response })
  }

  public getLyrics = async (ctx: Context) => {
    const id = ctx.req.param('id')

    const result = await this.songService.getSongLyrics(id)

    return ctx.json({ success: true, data: result })
  }

  public getSuggestions = async (ctx: Context) => {
    const songId = ctx.req.param('id')
    const { limit } = ctx.req.valid('query' as never)

    const suggestions = await this.songService.getSongSuggestions({ songId, limit })

    return ctx.json({ success: true, data: suggestions })
  }
}
