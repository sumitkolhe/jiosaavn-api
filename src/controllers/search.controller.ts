import { globalConstants } from '../constants'
import { SearchService } from '../services/search.service'
import type { AllSearchResponse } from 'interfaces/search.interface'
import type { ArtistSearchResponse } from '../interfaces/artist.interface'
import type { PlaylistSearchResponse } from '../interfaces/playlist.interface'
import type { AlbumSearchResponse } from '../interfaces/album.interface'
import type { SongSearchResponse } from '../interfaces/song.interface'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, RequestHandler, Response } from 'express'

export class SearchController {
  private searchService: SearchService

  constructor() {
    this.searchService = new SearchService()
  }
  // search everything i.e songs, artists, albums, etc
  public searchAll: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<AllSearchResponse>>,
    next: NextFunction
  ) => {
    try {
      const { query } = req.query

      const result = await this.searchService.all(query as string)

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  // search songs (includes download links)
  public searchSongs: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<SongSearchResponse>>,
    next: NextFunction
  ) => {
    try {
      const { query, page, limit } = req.query

      const result = await this.searchService.songs(query as string, Number(page), Number(limit))

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  // search albums only
  public searchAlbums: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<AlbumSearchResponse>>,
    next: NextFunction
  ) => {
    try {
      const { query, page, limit } = req.query

      const result = await this.searchService.albums(query as string, Number(page), Number(limit))

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  // search playlists only
  public searchPlaylists: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<PlaylistSearchResponse>>,
    next: NextFunction
  ) => {
    try {
      const { query, page, limit } = req.query

      const result = await this.searchService.playlists(query as string, Number(page), Number(limit))

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }

  // search artists only
  public searchArtists: RequestHandler = async (
    req: Request,
    res: Response<CustomResponse<ArtistSearchResponse>>,
    next: NextFunction
  ) => {
    try {
      const { query, page, limit } = req.query

      const result = await this.searchService.artists(query as string, Number(page), Number(limit))

      res.json({ status: globalConstants.status.success, message: null, data: result })
    } catch (error) {
      next(error)
    }
  }
}
