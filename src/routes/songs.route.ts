import { Router } from 'express'
import { SongsController } from '../controllers/songs.controller'
import { songsSchema } from '../helpers/validation.helper'
import type { Route } from '../interfaces/route.interface'

export class SongsRoute implements Route {
  public path = '/songs'
  public router = Router()
  public songsController = new SongsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, songsSchema, this.songsController.songDetails)
  }
}
