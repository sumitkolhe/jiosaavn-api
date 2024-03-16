import { handle } from '@hono/node-server/vercel'
import { AlbumController, ArtistController, SearchController, SongController } from '../dist/modules/index.js'
import { App } from '../dist/app.js'

const app = new App([new SongController(), new AlbumController(), new ArtistController(), new SearchController()])

export default handle(app.getApp())
