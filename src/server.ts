import { App } from './app'
import { AlbumController, ArtistController, SearchController, SongController } from './modules'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController()
]).getApp()

export default app
