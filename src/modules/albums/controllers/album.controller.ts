import { AlbumService } from '../services'
import type { Context } from 'hono'

export class AlbumController {
  private albumService: AlbumService

  constructor() {
    this.albumService = new AlbumService()
  }

  public getAlbum = async (ctx: Context) => {
    const { id, link } = ctx.req.valid('query' as never)

    const response = link ? await this.albumService.getAlbumByLink(link) : await this.albumService.getAlbumById(id!)

    return ctx.json({ success: true, data: response })
  }
}
