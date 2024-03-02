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
        tags: ['albums'],
        request: {
          query: z.object({
            id: z.string().optional().openapi({ description: 'Id of the album', type: 'string', example: 'Hq1sr6xu' }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/album\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                description: 'album link',
                type: 'string',
                example: 'https://www.jiosaavn.com/album/houdini/OgwhbhtDRwM'
              })
          })
        },
        responses: {
          200: {
            description: 'album details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: AlbumModel
                })
              }
            }
          }
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
