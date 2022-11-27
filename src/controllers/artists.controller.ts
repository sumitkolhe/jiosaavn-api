import { ArtistsService } from 'services/artists.service'
import { globalConstants } from '../constants'
import type { ArtistAlbumResponse, ArtistResponse, ArtistSongResponse } from '../interfaces/artist.interface'
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
      const { artistId } = req.params

      const result = await this.artistsService.detailsById(artistId as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  public artistSongs: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<ArtistSongResponse>>,
    next: NextFunction
  ) => {
    try {
      const { artistId } = req.params

      const result = await this.artistsService.artistSongs(artistId as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  public artistAblums: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<ArtistAlbumResponse>>,
    next: NextFunction
  ) => {
    try {
      const { artistId } = req.params

      const result = await this.artistsService.artistAlbums(artistId as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
