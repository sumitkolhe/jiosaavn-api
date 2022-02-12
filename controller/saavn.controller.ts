import { RequestHandler } from 'express'
import { topChartsService } from '../services/topcharts.service'
import { homeDataService } from '../services/homeData.service'

export class Controller {
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await homeDataService()
      res.json(homeData)
    } catch (error) {
      next(error)
    }
  }

  public static topCharts: RequestHandler = async (req, res, next) => {
    try {
      const topCharts = await topChartsService()
      res.json(topCharts)
    } catch (error) {
      next(error)
    }
  }
}
