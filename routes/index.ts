import express, { Router } from 'express'
import { Controller } from '../controller/saavn.controller'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (_req, res) => {
  res.json({
    server: 'online',
    documentation: 'https://docs.saavn.me',
    github: 'https://github.com/sumitkolhe/jiosaavn-api',
    author: 'https://sumit.co',
  })
})
parentRouter.get('/search', Controller.searchAll)
parentRouter.get('/home', Controller.homeData)
parentRouter.get('/topCharts', Controller.topCharts)
