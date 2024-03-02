import { handle } from '@hono/node-server/vercel'
import { AlbumController, ArtistController, SearchController, SongController } from '../src/modules'
import { App } from '../src/app'

const app = new App([new SongController(), new AlbumController(), new ArtistController(), new SearchController()])

export default handle(app.getApp())
