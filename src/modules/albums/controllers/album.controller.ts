import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { AlbumModel } from '#modules/albums/models'
import { AlbumService } from '#modules/albums/services'
import type { Routes } from '#common/types'

export class AlbumController implements Routes {
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
        summary: 'Retrieve an album by ID or link',
        description: 'Retrieve an album by providing either an ID or a direct link to the album on JioSaavn.',
        operationId: 'getAlbumByIdOrLink',
        request: {
          query: z.object({
            id: z.string().optional().openapi({
              title: 'Album ID',
              description: 'The unique ID of the album',
              type: 'string',
              example: '23241654',
              default: '23241654'
            }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/album\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                title: 'Album Link',
                description: 'A direct link to the album on JioSaavn',
                type: 'string',
                example: 'https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_',
                default: 'https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_'
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
                    description: 'Indicates the success status of the request.',
                    type: 'boolean',
                    example: true
                  }),
                  data: AlbumModel.openapi({
                    title: 'Album Details',
                    description: 'The detailed information of the album.'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request due to missing or invalid query parameters.' },
          404: { description: 'The album could not be found with the provided ID or link.' }
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
