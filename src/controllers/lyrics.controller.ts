import { globalConstants } from '../constants'
import { LyricsService } from '../services/lyrics.service'
import type { LyricsResponse } from '../interfaces/lyrics.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class LyricsController {
  private lyricsService: LyricsService

  constructor() {
    this.lyricsService = new LyricsService()
  }

  public lyricsDetails: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<LyricsResponse>>,
    next: NextFunction
  ) => {
    try {
      const { id } = req.query

      const result = await this.lyricsService.songLyrics(id as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
