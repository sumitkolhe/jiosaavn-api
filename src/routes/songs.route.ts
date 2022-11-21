import { Router } from 'express'
import { SongsController } from '../controllers/songs.controller'
import { songsSchema } from '../helpers/validator.helper'
import type { Routes } from '../interfaces/routes.interface'

export class SongsRoute implements Routes {
  public path = '/songs'
  public router = Router()
  public songsController = new SongsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.songsController.searchSongs)
    this.router.get(`${this.path}`, songsSchema, this.songsController.songDetails)
  }
}
