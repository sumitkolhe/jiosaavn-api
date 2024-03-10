import { App } from './app'
import { AlbumController, ArtistController, SearchController, SongController } from './modules'

export default new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController()
]).getApp()
