import { App } from './app'
import { SongController } from './modules/songs/controllers/song.controller'

const app = new App([new SongController()])

export default app.getApp()
