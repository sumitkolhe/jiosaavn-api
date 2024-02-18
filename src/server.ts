import { App } from './app'
import { AlbumRoute } from './modules/albums/routes'
import { SearchRoute } from './modules/search/routes'
import { SongRoute } from './modules/songs/routes'

const app = new App([new SearchRoute(), new SongRoute(), new AlbumRoute()])

export default app.getApp()
