import { SongService } from '../services'
import type { Context } from 'hono'

export class SongController {
  private songsService: SongService

  constructor() {
    this.songsService = new SongService()
  }

  public getSong = async (ctx: Context) => {
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
}
