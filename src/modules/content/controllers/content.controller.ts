import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { z } from 'zod'

export class ContentController {
  public controller: OpenAPIHono

  constructor() {
    this.controller = new OpenAPIHono()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/content/trending',
        tags: ['Content'],
        summary: 'Get trending content',
        operationId: 'getTrending',

        responses: {
          200: {
            description: 'Trending content',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean(),
                  data: z.any()
                })
              }
            }
          }
        }
      }),

      async (ctx) => {
        const { data } = await useFetch<any>({
          endpoint: Endpoints.trending,
          params: {}
        })

        return ctx.json({
          success: true,
          data
        })
      }
    )
  }
}
