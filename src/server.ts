import 'dotenv/config'
import { App } from './app'
import { IndexRoute } from './routes/index.route'

const app = new App([new IndexRoute()])

app.listen()
