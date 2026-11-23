import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { albumsApp } from '#modules/albums/albums.routes.js'
import { artistsApp } from '#modules/artists/artists.routes.js'
import { channelsApp } from '#modules/channels/channels.routes.js'
import { chartsApp } from '#modules/charts/charts.routes.js'
import { playlistsApp } from '#modules/playlists/playlists.routes.js'
import { searchApp } from '#modules/search/search.routes.js'
import { songsApp } from '#modules/songs/songs.routes.js'
import { trendingApp } from '#modules/trending/trending.routes.js'
import { cors } from 'hono/cors'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { home } from './home.js'

const resourceApps = [songsApp, albumsApp, artistsApp, playlistsApp, searchApp, trendingApp, chartsApp, channelsApp]

export function createApp(): OpenAPIHono {
  const app = new OpenAPIHono()

  app.use(logger())
  app.use(prettyJSON())
  app.use(cors())

  for (const resourceApp of resourceApps) {
    app.route('/api', resourceApp)
  }

  app.route('/', home)

  app.doc31('/swagger', (ctx) => {
    const { protocol: urlProtocol, hostname, port } = new URL(ctx.req.url)
    const protocol = ctx.req.header('x-forwarded-proto') ? `${ctx.req.header('x-forwarded-proto')}:` : urlProtocol

    return {
      openapi: '3.1.0',
      info: {
        version: '1.0.0',
        title: 'JioSaavn API',
        description: `# Introduction
        \nJioSaavn API, accessible at [saavn-api.nandanvarma.com](https://saavn-api.nandanvarma.com), is an unofficial API that allows users to download high-quality songs from [JioSaavn](https://jiosaavn.com).
        It offers a fast, reliable, and easy-to-use API for developers. \n`
      },
      servers: [{ url: `${protocol}//${hostname}${port ? `:${port}` : ''}`, description: 'Current environment' }]
    }
  })

  app.get(
    '/docs',
    apiReference({
      pageTitle: 'JioSaavn API Documentation',
      theme: 'deepSpace',
      isEditable: false,
      layout: 'modern',
      darkMode: true,
      metaData: {
        applicationName: 'JioSaavn API',
        author: 'Sumit Kolhe',
        creator: 'Sumit Kolhe',
        publisher: 'Sumit Kolhe',
        robots: 'index, follow',
        description:
          'JioSaavn API is an unofficial wrapper written in TypeScript for jiosaavn.com providing programmatic access to a vast library of songs, albums, artists, playlists, and more.'
      },
      url: '/swagger'
    })
  )

  app.notFound((ctx) =>
    ctx.json({ success: false, message: 'route not found, check docs at https://saavn-api.nandanvarma.com/docs' }, 404)
  )

  app.onError((err, ctx) => {
    const error = err as HTTPException
    console.error(`[app] ✗ ${ctx.req.method} ${ctx.req.path} → ${error.status || 500}: ${error.message}`)
    if (!(err instanceof HTTPException)) {
      console.error(err)
    }
    return ctx.json({ success: false, message: error.message }, error.status || 500)
  })

  return app
}
