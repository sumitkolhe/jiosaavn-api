import { RequestHandler } from 'express'
import { TrendingService } from '../services/trending.service'
import { ChartsService } from '../services/charts.service'
import { HomeService } from '../services/home.service'
import { SearchService } from '../services/search.service'
import { globalConstants } from '../constants'

export class Controller {
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await HomeService()
      res.json(homeData)
    } catch (error) {
      next(error)
    }
  }

  public static searchAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req.query
      const searchResults = await SearchService.searchAll(query as string)
      res.json(searchResults)
    } catch (error) {
      next(error)
    }
  }

  public static searchSongs: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const searchResults = await SearchService.searchSongs(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, data: searchResults })
    } catch (error) {
      next(error)
    }
  }

  public static searchAlbums: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query
      const searchResults = await SearchService.searchAlbums(query as string, page as string, limit as string)
      res.json(searchResults)
    } catch (error) {
      next(error)
    }
  }

  public static charts: RequestHandler = async (_req, res, next) => {
    try {
      const charts = await ChartsService()
      res.json(charts)
    } catch (error) {
      next(error)
    }
  }

  public static trending: RequestHandler = async (_req, res, next) => {
    try {
      const trending = await TrendingService()
      res.json(trending)
    } catch (error) {
      next(error)
    }
  }
}
