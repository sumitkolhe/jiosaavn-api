import { globalConstants } from '../constants'
import { AlbumsService } from '../services/albums.service'
import type { AlbumResponse } from '../interfaces/album.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class AlbumsController {
  private albumsService: AlbumsService

  constructor() {
    this.albumsService = new AlbumsService()
  }

  public albumDetails: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<AlbumResponse>>,
    next: NextFunction
  ) => {
    try {
      const { id, link } = req.query

      let result: AlbumResponse

      if (id) {
        result = await this.albumsService.detailsById(id as string)
      } else {
        result = await this.albumsService.detailsByLink(link as string)
      }

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
