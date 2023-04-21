import { Router } from 'express'
import { searchSchema } from '../helpers/validation.helper'
import { SearchController } from '../controllers/search.controller'
import type { Route } from '../interfaces/route.interface'

export class SearchRoute implements Route {
  public path = '/search'
  public router = Router()
  public searchController = new SearchController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.searchController.searchAll)
    this.router.get(`${this.path}/songs`, searchSchema, this.searchController.searchSongs)
    this.router.get(`${this.path}/albums`, searchSchema, this.searchController.searchAlbums)
    this.router.get(`${this.path}/playlists`, searchSchema, this.searchController.searchPlaylists)
    this.router.get(`${this.path}/artists`, searchSchema, this.searchController.searchArtists)
  }
}
