import { Router } from 'express'
import { ArtistsController } from '../controllers/artists.controller'
import { albumsSchema } from '../helpers/validation.helper'
import type { Route } from '../interfaces/route.interface'

export class ArtistsRoute implements Route {
  public path = '/artists'
  public router = Router()
  public artistsController = new ArtistsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.artistsController.artistDetails)
  }
}
