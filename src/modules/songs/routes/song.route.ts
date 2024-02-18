import { Hono } from 'hono'
import { SongController } from '../controllers/song.controller'
import { songLyricsSchema, songSchema } from '../helpers'
import type { Routes } from '../../../common/types'

export class SongRoute implements Routes {
  public router: Hono
  public songController = new SongController()
  public path = '/songs'

  constructor() {
    this.router = new Hono()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, songSchema, (c) => this.songController.getSong(c))
    this.router.get(`${this.path}/:id/lyrics`, songLyricsSchema, (c) => this.songController.getLyrics(c))
  }
}
