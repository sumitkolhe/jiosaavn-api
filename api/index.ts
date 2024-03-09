import { handle } from 'hono/vercel'
import { AlbumController, ArtistController, SearchController, SongController } from '../src/modules'
import { App } from '../src/app'

export const config = {
  runtime: 'edge'
}

const app = new App([new SongController(), new AlbumController(), new ArtistController(), new SearchController()])

export default handle(app.getApp())
