import 'dotenv/config'
import { App } from '../src/app'
import { AlbumsRoute } from '../src/routes/albums.route'
import { SongsRoute } from '../src/routes/songs.route'
import { SearchRoute } from '../src/routes/search.route'
import { PlaylistsRoute } from '../src/routes/playlists.route'
import { ArtistsRoute } from '../src/routes/artists.route'
import { HomeRoute } from '../src/routes/home.route'
import { LyricsRoute } from '../src/routes/lyrics.route'

const app = new App([
  new HomeRoute(),
  new SearchRoute(),
  new SongsRoute(),
  new ArtistsRoute(),
  new AlbumsRoute(),
  new PlaylistsRoute(),
  new LyricsRoute(),
])

export default app.getServer()
