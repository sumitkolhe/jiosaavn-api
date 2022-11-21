import 'dotenv/config'
import { SongsRoute } from './routes/songs.route'
import { App } from './app'
import { SearchRoute } from './routes/search.route'

const app = new App([new SearchRoute(), new SongsRoute()])

app.listen()
