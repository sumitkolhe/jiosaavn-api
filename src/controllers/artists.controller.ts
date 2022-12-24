import { ArtistsService } from '../services/artists.service'
import { globalConstants } from '../constants'
import type { SongResponse } from '../interfaces/song.interface'
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
      const { id, link } = req.query

      let result: ArtistResponse

      if (id) {
        result = await this.artistsService.detailsById(id as string)
      } else {
        result = await this.artistsService.detailsByLink(link as string)
      }

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
      const { page, category, sort } = req.query
      const { artistId } = req.params

      const result = await this.artistsService.artistSongs(
        artistId as string,
        Number(page),
        category as string,
        sort as string
      )

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  public artistTopSongs: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<SongResponse[]>>,
    next: NextFunction
  ) => {
    try {
      const { language } = req.query
      const { artistId, songId } = req.params

      const result = await this.artistsService.artistTopSongs(artistId, songId, language as string)

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
      const { page, category, sort } = req.query
      const { artistId } = req.params

      const result = await this.artistsService.artistAlbums(
        artistId as string,
        Number(page),
        category as string,
        sort as string
      )

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
