import { RequestHandler } from 'express'
import { TrendingService } from '../services/trending.service'
import { ChartsService } from '../services/charts.service'
import { HomeService } from '../services/home.service'
import { SearchService } from '../services/search.service'
import { globalConstants } from '../constants'
import { AlbumsService } from '../services/albums.service'

export class Controller {
  // get homepage data
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await HomeService()

      res.json({ status: globalConstants.status.success, data: homeData })
    } catch (error) {
      next(error)
    }
  }

  // search everything i.e songs, artists, albums, etc
  public static searchAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req.query

      const searchResults = await SearchService.searchAll(query as string)

      res.json({ status: globalConstants.status.success, data: searchResults })
    } catch (error) {
      next(error)
    }
  }

  // search songs (includes download links)
  public static searchSongs: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const searchResults = await SearchService.searchSongs(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, data: searchResults })
    } catch (error) {
      next(error)
    }
  }

  // search albums only
  public static searchAlbums: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const searchResults = await SearchService.searchAlbums(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, data: searchResults })
    } catch (error) {
      next(error)
    }
  }

  // get top charts
  public static charts: RequestHandler = async (_req, res, next) => {
    try {
      const charts = await ChartsService()

      res.json({ status: globalConstants.status.success, data: charts })
    } catch (error) {
      next(error)
    }
  }

  // get trending media
  public static trending: RequestHandler = async (_req, res, next) => {
    try {
      const trending = await TrendingService()

      res.json({ status: globalConstants.status.success, data: trending })
    } catch (error) {
      next(error)
    }
  }

  // get album details
  public static albumDetails: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      const albums = await AlbumsService(id as string)

      res.json({ status: globalConstants.status.success, data: albums })
    } catch (error) {
      next(error)
    }
  }
}
