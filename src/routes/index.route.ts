import { Router } from 'express'
import { IndexController } from '../controllers/index.controller'
import type { Routes } from '../interfaces/routes.interface'

export class IndexRoute implements Routes {
  public path = '/'
  public router = Router()
  public indexController = new IndexController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, this.indexController.index)
  }
}
