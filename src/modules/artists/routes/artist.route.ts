import { Hono } from 'hono'
import { ArtistController } from '../controllers'
import { artistSchema } from '../helpers/validation.helper'
import type { Routes } from '../../../common/types'

export class ArtistRoute implements Routes {
  public router: Hono
  public artistController = new ArtistController()
  public path = '/artists'

  constructor() {
    this.router = new Hono()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, artistSchema, (c) => this.artistController.getArtist(c))
    this.router.get(`${this.path}/:id`, (c) => this.artistController.getArtistById(c))
  }
}
