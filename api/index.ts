import 'dotenv/config'
import { App } from '../src/app'
import { IndexRoute } from '../src/routes/index.route'

const app = new App([new IndexRoute()])

export default app.getServer()
