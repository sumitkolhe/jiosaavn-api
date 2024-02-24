import { SongService } from '../services'
import type { Context } from 'hono'

export class SongController {
  private songsService: SongService

  constructor() {
    this.songsService = new SongService()
  }

  public getSong = async (ctx: Context) => {
    const { link, id } = ctx.req.valid('query' as never)

    const response = id
      ? await this.songsService.getSongByIds({ songIds: id })
      : await this.songsService.getSongByLink(link)

    return ctx.json({ success: true, data: response })
  }

  public getSongById = async (ctx: Context) => {
    const songId = ctx.req.param('id')
    const { lyrics } = ctx.req.valid('query' as never)

    const response = await this.songsService.getSongByIds({
      songIds: songId,
      includeLyrics: lyrics
    })

    return ctx.json({ success: true, data: response })
  }

  public getLyrics = async (ctx: Context) => {
    const id = ctx.req.param('id')

    const result = await this.songsService.getSongLyrics(id)

    return ctx.json({ success: true, data: result })
  }

  public getSuggestions = async (ctx: Context) => {
    const songId = ctx.req.param('id')
    const { limit } = ctx.req.valid('query' as never)

    const suggestions = await this.songsService.getSongSuggestions({ songId, limit })

    return ctx.json({ success: true, data: suggestions })
  }
}
