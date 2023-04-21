import { globalConstants } from '../constants'
import { ModulesService } from '../services/modules.service'
import type { ModulesResponse } from '../interfaces/modules.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class ModulesController {
  private modulesService: ModulesService

  constructor() {
    this.modulesService = new ModulesService()
  }

  public browseModules: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<ModulesResponse>>,
    next: NextFunction
  ) => {
    try {
      const { language } = req.query

      const result = await this.modulesService.modules(language as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
