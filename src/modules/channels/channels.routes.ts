import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { ChannelDetailsSchema, ChannelSchema } from './channels.schema.js'
import { getChannelById, getChannels } from './channels.service.js'

export const channelsApp = new OpenAPIHono()

channelsApp.openapi(
  createRoute({
    method: 'get',
    path: '/channels',
    tags: ['Channels'],
    summary: 'Retrieve mood, genre and situation channels',
    description:
      "JioSaavn's editorial channels (Romance, Workout, Sufi, The 1990s…), each tagged with mood / genre / situation / seasonality. This is the only mood and genre vocabulary the upstream exposes.",
    operationId: 'getChannels',
    responses: {
      200: {
        description: 'Successful response with channels',
        content: {
          'application/json': {
            schema: z.object({ success: z.boolean().openapi({ example: true }), data: z.array(ChannelSchema) })
          }
        }
      }
    }
  }),
  async (ctx) => ctx.json({ success: true as const, data: await getChannels() })
)

channelsApp.openapi(
  createRoute({
    method: 'get',
    path: '/channels/{id}',
    tags: ['Channels'],
    summary: 'Retrieve a channel with its top songs and playlists',
    operationId: 'getChannelById',
    request: {
      params: z.object({
        id: z.string().openapi({ description: 'Channel ID, as returned by /channels', example: '27' })
      })
    },
    responses: {
      200: {
        description: 'Successful response with the channel',
        content: {
          'application/json': {
            schema: z.object({ success: z.boolean().openapi({ example: true }), data: ChannelDetailsSchema })
          }
        }
      },
      404: { description: 'Channel not found' }
    }
  }),
  async (ctx) => {
    const { id } = ctx.req.valid('param')
    return ctx.json({ success: true as const, data: await getChannelById(id) })
  }
)
