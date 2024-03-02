import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { AlbumService } from '../services'
import { AlbumModel } from '../models'

export class AlbumController {
  public controller: OpenAPIHono
  private albumService: AlbumService

  constructor() {
    this.controller = new OpenAPIHono()
    this.albumService = new AlbumService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/albums',
        tags: ['Album'],
        summary: 'Retrieve album details by ID or link',
        description: 'Fetches album details either by a unique song ID or by a direct song link.',
        operationId: 'getAlbum',
        request: {
          query: z.object({
            id: z.string().optional().openapi({ description: 'ID of the album', type: 'string', example: 'Hq1sr6xu' }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/album\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                description: 'The direct link of the album on JioSaavn',
                type: 'string',
                example: 'https://www.jiosaavn.com/album/houdini/OgwhbhtDRwM'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with album details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: AlbumModel.openapi({
                    description: 'Album details'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request when query parameters are missing or invalid' },
          404: { description: 'Album not found with the given ID or link' }
        }
      }),
      async (ctx) => {
        const { id, link } = ctx.req.valid('query')

        const response = link ? await this.albumService.getAlbumByLink(link) : await this.albumService.getAlbumById(id!)

        return ctx.json({ success: true, data: response })
      }
    )
  }
}
