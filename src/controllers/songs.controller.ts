import { globalConstants } from '../constants'
import { SongsService } from '../services/songs.service'
import type { SongResponse } from '../interfaces/song.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class SongsController {
  private songsService: SongsService

  constructor() {
    this.songsService = new SongsService()
  }

  public songDetails: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<SongResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { id, link } = req.query

      if (id) {
        const result = await this.songsService.detailsById(id as string)
        res.json({ status: globalConstants.status.success, message: null, data: result })
      } else if (link) {
        const result = await this.songsService.detailsByLink(link as string)
        res.json({ status: globalConstants.status.success, message: null, data: result })
      }
    } catch (error) {
      next(error)
    }
  }
}
