import { Router } from 'express'
import { PlaylistsController } from '../controllers/playlists.controller'
import type { Route } from '../interfaces/route.interface'

export class PlaylistsRoute implements Route {
  public path = '/playlists'
  public router = Router()
  public playlistsController = new PlaylistsController()
  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.playlistsController.playlistDetails)
  }
}
