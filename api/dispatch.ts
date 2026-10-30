import app from '../dist/index.js'

const routeParam = '__vercel_route'

export default {
  fetch(request: Request) {
    const url = new URL(request.url)
    const route = url.searchParams.get(routeParam)

    if (!route) {
      return Response.json({ success: false, message: 'API route is missing' }, { status: 400 })
    }

    url.searchParams.delete(routeParam)
    url.pathname = `/api/${route}`

    return app.fetch(new Request(url, request))
  }
}
