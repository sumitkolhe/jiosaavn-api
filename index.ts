import { handle } from '@hono/node-server/vercel'
import { AlbumRoute } from '../src/modules/albums/routes'
import { SongRoute } from '../src/modules/songs/routes'
import { SearchRoute } from '../src/modules/search/routes'
import { App } from '../src/app'

const app = new App([new SearchRoute(), new SongRoute(), new AlbumRoute()])

export default handle(app.getApp())
