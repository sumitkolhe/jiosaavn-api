import 'dotenv/config'
import { App } from './app'
import { SearchRoute } from './routes/search.route'

const app = new App([new SearchRoute()])

app.listen()
