import { RequestHandler } from 'express'
import { TopChartsService } from '../services/topcharts.service'
import { HomeDataService } from '../services/homeData.service'
import { SearchService } from '../services/search.service'

export class Controller {
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await HomeDataService()
      res.json(homeData)
    } catch (error) {
      next(error)
    }
  }

  public static searchAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req.query
      const topCharts = await SearchService(query as string)
      res.json(topCharts)
    } catch (error) {
      next(error)
    }
  }

  public static topCharts: RequestHandler = async (_req, res, next) => {
    try {
      const topCharts = await TopChartsService()
      res.json(topCharts)
    } catch (error) {
      next(error)
    }
  }
}
