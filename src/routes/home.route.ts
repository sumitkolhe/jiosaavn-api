import { Router } from 'express'
import { HomeController } from '../controllers/home.controller'
import type { Route } from '../interfaces/route.interface'

export class HomeRoute implements Route {
  public path = '/'
  public router = Router()
  public homeController = new HomeController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.homeController.home)
  }
}
