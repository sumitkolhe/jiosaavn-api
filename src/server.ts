import 'dotenv/config'
import { ModulesRoute } from './routes/modules.route'
import { LyricsRoute } from './routes/lyrics.route'
import { HomeRoute } from './routes/home.route'
import { PlaylistsRoute } from './routes/playlists.route'
import { AlbumsRoute } from './routes/albums.route'
import { SongsRoute } from './routes/songs.route'
import { App } from './app'
import { SearchRoute } from './routes/search.route'
import { ArtistsRoute } from './routes/artists.route'

const app = new App([
  new HomeRoute(),
  new SearchRoute(),
  new SongsRoute(),
  new AlbumsRoute(),
  new ArtistsRoute(),
  new PlaylistsRoute(),
  new LyricsRoute(),
  new ModulesRoute(),
])

app.listen()
