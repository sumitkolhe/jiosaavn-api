import { Router } from 'express'
import { ModulesController } from '../controllers/modules.controller'
import type { Route } from '../interfaces/route.interface'

export class ModulesRoute implements Route {
  public path = '/modules'
  public router = Router()
  public modulesController = new ModulesController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.modulesController.browseModules)
  }
}
