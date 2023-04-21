import { Router } from 'express'
import { artistRecommendedSongsSchema, artistSongsAndAlbumsSchema, artistsSchema } from '../helpers/validation.helper'
import { ArtistsController } from '../controllers/artists.controller'
import type { Route } from '../interfaces/route.interface'

export class ArtistsRoute implements Route {
  public path = '/artists'
  public router = Router()
  public artistsController = new ArtistsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, artistsSchema, this.artistsController.artistDetails)
    this.router.get(`${this.path}/:artistId/albums`, artistSongsAndAlbumsSchema, this.artistsController.artistAblums)
    this.router.get(`${this.path}/:artistId/songs`, artistSongsAndAlbumsSchema, this.artistsController.artistSongs)
    this.router.get(
      `${this.path}/:artistId/recommendations/:songId`,
      artistRecommendedSongsSchema,
      this.artistsController.artistTopSongs
    )
  }
}
