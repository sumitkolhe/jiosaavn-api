import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { PlaylistModel } from '#modules/playlists/models'
import { PlaylistService } from '#modules/playlists/services'
import type { Routes } from '#common/types'

export class PlaylistController implements Routes {
  public controller: OpenAPIHono
  private playlistService: PlaylistService

  constructor() {
    this.controller = new OpenAPIHono()
    this.playlistService = new PlaylistService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/playlists',
        tags: ['Playlist'],
        summary: 'Retrieve a playlist by ID or link',
        description: 'Retrieve a playlist by providing either an ID or a direct link to the playlist on JioSaavn.',
        operationId: 'getPlaylistByIdOrLink',
        request: {
          query: z.object({
            id: z.string().optional().openapi({
              title: 'Playlist ID',
              description: 'The unique ID of the playlist',
              type: 'string',
              example: '82914609',
              default: '82914609'
            }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => {
                const matches = value?.match(
                  /(?:jiosaavn\.com|saavn\.com)\/(?:featured|s\/playlist)\/[^/]+\/([^/]+)$|\/([^/]+)$/
                )
                const filteredMatches = matches?.filter((each) => each !== undefined)
                return (filteredMatches && filteredMatches[filteredMatches?.length - 1 || 0]) || undefined
              })
              .openapi({
                title: 'Playlist Link',
                description: 'A direct link to the playlist on JioSaavn',
                type: 'string',
                example: 'https://www.jiosaavn.com/featured/its-indie-english/AMoxtXyKHoU_',
                default: 'https://www.jiosaavn.com/featured/its-indie-english/AMoxtXyKHoU_'
              }),
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Page Number',
              description: 'The page number of the songs to retrieve from the playlist',
              type: 'integer',
              example: '0',
              default: '0'
            }),
            limit: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Limit',
              description: 'Number of songs to retrieve per page',
              type: 'integer',
              example: '10',
              default: '10'
            })
          })
        },
        responses: {
          200: {
            description: 'Successful response with playlist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates the success status of the request.',
                    type: 'boolean',
                    example: true
                  }),
                  data: PlaylistModel.openapi({
                    title: 'Playlist Details',
                    description: 'The detailed information of the playlist.'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request due to missing or invalid query parameters.' },
          404: { description: 'The playlist could not be found with the provided ID or link.' }
        }
      }),
      async (ctx) => {
        const { id, link, page, limit } = ctx.req.valid('query')

        if (!link && !id) {
          return ctx.json({ success: false, message: 'Either playlist ID or link is required' }, 400)
        }

        const response = link
          ? await this.playlistService.getPlaylistByLink({
              token: link,
              page: page || 0,
              limit: limit || 10
            })
          : await this.playlistService.getPlaylistById({
              id: id!,
              page: page || 0,
              limit: limit || 10
            })

        return ctx.json({ success: true, data: response })
      }
    )
  }
}
