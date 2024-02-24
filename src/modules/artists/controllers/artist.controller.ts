import { ArtistService } from '../services'
import type { Context } from 'hono'

export class ArtistController {
  private artistService: ArtistService

  constructor() {
    this.artistService = new ArtistService()
  }

  public getArtist = async (ctx: Context) => {
    const { link, id, page, sortBy, sortOrder, songCount, albumCount } = ctx.req.valid('query' as never)

    const response = link
      ? await this.artistService.getArtistByLink({
          token: link,
          page,
          songCount,
          albumCount,
          sortBy,
          sortOrder
        })
      : await this.artistService.getArtistById({ artistId: id, page, songCount, albumCount, sortBy, sortOrder })

    return ctx.json({ success: true, data: response })
  }

  public getArtistById = async (ctx: Context) => {
    const artistId = ctx.req.param('id')
    const { page, sortBy, sortOrder, songCount, albumCount } = ctx.req.valid('query' as never)

    const response = await this.artistService.getArtistById({
      artistId,
      page,
      songCount,
      albumCount,
      sortBy,
      sortOrder
    })

    return ctx.json({ success: true, data: response })
  }

  public getArtistSongs = async (ctx: Context) => {
    const artistId = ctx.req.param('id')
    const { page, sortBy, sortOrder } = ctx.req.valid('query' as never)

    const response = await this.artistService.getArtistSongs({
      artistId,
      page,
      sortBy,
      sortOrder
    })

    return ctx.json({ success: true, data: response })
  }

  public getArtistAlbums = async (ctx: Context) => {
    const artistId = ctx.req.param('id')
    const { page, sortBy, sortOrder } = ctx.req.valid('query' as never)

    const response = await this.artistService.getArtistAlbums({
      artistId,
      page,
      sortBy,
      sortOrder
    })

    return ctx.json({ success: true, data: response })
  }
}
