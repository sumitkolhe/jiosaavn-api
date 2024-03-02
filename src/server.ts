import { App } from './app'
import { AlbumController, ArtistController, SearchController, SongController } from './modules'

const app = new App([new SongController(), new AlbumController(), new ArtistController(), new SearchController()])

export default app.getApp()
