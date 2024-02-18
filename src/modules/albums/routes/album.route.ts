import { Hono } from 'hono'
import { AlbumController } from '../controllers'
import { albumSchema } from '../helpers/validation.helper'
import type { Routes } from '../../../common/types'

export class AlbumRoute implements Routes {
  public router: Hono
  public albumController = new AlbumController()
  public path = '/albums'

  constructor() {
    this.router = new Hono()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, albumSchema, (c) => this.albumController.getAlbum(c))
  }
}
