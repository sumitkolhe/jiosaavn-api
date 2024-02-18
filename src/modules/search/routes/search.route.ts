import { Routes } from '../../../common/types'
import { SearchController } from '../controllers'
import { searchSchema } from '../helpers'
import { Hono } from 'hono'

export class SearchRoute implements Routes {
  public router: Hono
  public searchController = new SearchController()
  public path = '/search'

  constructor() {
    this.router = new Hono()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router
      .get(this.path, searchSchema, this.searchController.searchAll)
      .get(`${this.path}/songs`, searchSchema, this.searchController.searchSongs)
      .get(`${this.path}/albums`, searchSchema, this.searchController.searchAlbums)
  }
}
