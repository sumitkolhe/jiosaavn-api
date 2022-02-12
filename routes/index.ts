import express, { Router } from 'express'
import { Controller } from '../controller/saavn.controller'
import { routes } from '../interfaces/routes'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (_req, res) => {
  res.json({
    server: 'online',
    documentation: 'https://docs.saavn.me',
    github: 'https://github.com/sumitkolhe/jiosaavn-api',
    author: 'https://sumit.co',
  })
})

parentRouter.get(routes.homeData, Controller.homeData)
parentRouter.get(routes.topCharts, Controller.topCharts)
