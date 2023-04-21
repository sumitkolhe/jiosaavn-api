import { Router } from 'express'
import { LyricsController } from '../controllers/lyrics.controller'
import { idSchema } from '../helpers/validation.helper'
import type { Route } from '../interfaces/route.interface'

export class LyricsRoute implements Route {
  public path = '/lyrics'
  public router = Router()
  public lyricsController = new LyricsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, idSchema, this.lyricsController.lyricsDetails)
  }
}
