import { Router } from 'express'
import { AlbumsController } from '../controllers/albums.controller'
import { albumsSchema } from '../helpers/validation.helper'
import type { Route } from '../interfaces/route.interface'

export class AlbumsRoute implements Route {
  public path = '/albums'
  public router = Router()
  public albumsController = new AlbumsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, albumsSchema, this.albumsController.albumDetails)
  }
}
