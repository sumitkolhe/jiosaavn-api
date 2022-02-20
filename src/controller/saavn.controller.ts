import { RequestHandler } from 'express'
import { SearchService } from '../services/search.service'
import { globalConstants } from '../constants'
import { AlbumsService } from '../services/albums.service'
import { SongsService } from '../services/songs.service'
import { MiscellaneousService } from '../services/misc.service'

export class Controller {
  // get homepage data
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await MiscellaneousService.home()

      res.json({ status: globalConstants.status.success, results: homeData })
    } catch (error) {
      next(error)
    }
  }

  // search everything i.e songs, artists, albums, etc
  public static searchAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req.query

      const allSearchResults = await SearchService.searchAll(query as string)

      res.json({ status: globalConstants.status.success, results: allSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // search songs (includes download links)
  public static searchSongs: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const songSearchResults = await SearchService.searchSongs(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, results: songSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // search albums only
  public static searchAlbums: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const albumSearchResults = await SearchService.searchAlbums(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, results: albumSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // get top charts
  public static charts: RequestHandler = async (_req, res, next) => {
    try {
      const charts = await MiscellaneousService.charts()

      res.json({ status: globalConstants.status.success, results: charts })
    } catch (error) {
      next(error)
    }
  }

  // get trending media
  public static trending: RequestHandler = async (_req, res, next) => {
    try {
      const trending = await MiscellaneousService.trending()

      res.json({ status: globalConstants.status.success, results: trending })
    } catch (error) {
      next(error)
    }
  }

  // get album details
  public static albumDetails: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      const albumDetails = await AlbumsService(id as string)

      res.json({ status: globalConstants.status.success, results: albumDetails })
    } catch (error) {
      next(error)
    }
  }

  // get song details
  public static songDetails: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      const songDetails = await SongsService(id as string)

      res.json({ status: globalConstants.status.success, results: songDetails })
    } catch (error) {
      next(error)
    }
  }

  // get lyrics
  public static lyrics: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      const songLyrics = await MiscellaneousService.lyrics(id as string)

      res.json({ status: globalConstants.status.success, results: songLyrics })
    } catch (error) {
      next(error)
    }
  }
}
