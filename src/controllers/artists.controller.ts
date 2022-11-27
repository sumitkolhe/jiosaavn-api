import { ArtistsService } from 'services/artists.service'
import { globalConstants } from '../constants'
import type { ArtistResponse } from '../interfaces/artist.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class ArtistsController {
  private artistsService: ArtistsService

  constructor() {
    this.artistsService = new ArtistsService()
  }

  public artistDetails: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<ArtistResponse>>,
    next: NextFunction
  ) => {
    try {
      const { id } = req.query

      const result = await this.artistsService.detailsById(id as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
