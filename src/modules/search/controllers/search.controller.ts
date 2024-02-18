import type { Context } from 'hono'
import { SearchService } from '../services'

export class SearchController {
  private searchService: SearchService

  constructor() {
    this.searchService = new SearchService()
  }

  public searchAll = async (ctx: Context) => {
    const { query } = ctx.req.valid('query' as never)

    const result = await this.searchService.searchAll(query)

    return ctx.json({ success: true, data: result })
  }

  public searchSongs = async (ctx: Context) => {
    const { query, page, limit } = ctx.req.valid('query' as never)

    const result = await this.searchService.searchSongs({ query, page, limit })

    return ctx.json({ success: true, data: result })
  }

  public searchAlbums = async (ctx: Context) => {
    const { query, page, limit } = ctx.req.valid('query' as never)

    const result = await this.searchService.searchAlbums({ query, page, limit })

    return ctx.json({ success: true, data: result })
  }
}
