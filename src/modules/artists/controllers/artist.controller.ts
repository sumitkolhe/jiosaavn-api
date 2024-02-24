import { ArtistService } from '../services'
import type { Context } from 'hono'

export class ArtistController {
  private artistService: ArtistService

  constructor() {
    this.artistService = new ArtistService()
  }

  public getArtist = async (ctx: Context) => {
    const { link, id } = ctx.req.valid('query' as never)

    const response = link ? await this.artistService.getArtistByLink(link) : await this.artistService.getArtistById(id)

    return ctx.json({ success: true, data: response })
  }

  public getArtistById = async (ctx: Context) => {
    const songId = ctx.req.param('id')

    const response = await this.artistService.getArtistById(songId)

    return ctx.json({ success: true, data: response })
  }
}
