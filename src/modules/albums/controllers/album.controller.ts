import { AlbumService } from '../services'
import type { Context } from 'hono'
import type { Album } from '../types'

export class AlbumController {
  private albumService: AlbumService

  constructor() {
    this.albumService = new AlbumService()
  }

  public getAlbum = async (ctx: Context) => {
    const { id, link } = ctx.req.valid('query' as never)

    let result: Album = {} as Album

    if (id) {
      result = await this.albumService.getAlbumById(id)
    } else if (link) {
      result = await this.albumService.getAlbumByLink(link)
    }

    return ctx.json({ success: true, data: result })
  }
}
