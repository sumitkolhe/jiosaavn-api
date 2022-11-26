import 'dotenv/config'
import { PlaylistsRoute } from './routes/playlists.route'
import { AlbumsRoute } from './routes/albums.route'
import { SongsRoute } from './routes/songs.route'
import { App } from './app'
import { SearchRoute } from './routes/search.route'

const app = new App([new SearchRoute(), new SongsRoute(), new AlbumsRoute(), new PlaylistsRoute()])

app.listen()
