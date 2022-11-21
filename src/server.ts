import 'dotenv/config'
import { AlbumsRoute } from './routes/albums.route'
import { SongsRoute } from './routes/songs.route'
import { App } from './app'
import { SearchRoute } from './routes/search.route'

const app = new App([new SearchRoute(), new SongsRoute(), new AlbumsRoute()])

app.listen()
