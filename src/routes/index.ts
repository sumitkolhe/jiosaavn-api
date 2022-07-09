import express from 'express'
import { validators } from '../middleware/validator'
import { Controller } from '../controller/saavn.controller'
import type { Router } from 'express'

export const parentRouter: Router = express.Router()

parentRouter.get('/', (_req, res) => {
  res.json({
    server: 'online',
    documentation: 'https://docs.saavn.me',
    github: 'https://github.com/sumitkolhe/jiosaavn-api',
    author: 'https://sumit.co',
  })
})
parentRouter.get('/search/all', validators.searchAll, Controller.searchAll)
parentRouter.get('/search/songs', validators.searchSpecific, Controller.searchSongs)
parentRouter.get('/search/albums', validators.searchSpecific, Controller.searchAlbums)
parentRouter.get('/home', Controller.homeData)
parentRouter.get('/charts', Controller.charts)
parentRouter.get('/trending', Controller.trending)
parentRouter.get('/playlists', Controller.playlists)
parentRouter.get('/albums', validators.details, Controller.albumDetails)
parentRouter.get('/songs', validators.details, Controller.songDetails)
parentRouter.get('/lyrics', validators.details, Controller.lyrics)
