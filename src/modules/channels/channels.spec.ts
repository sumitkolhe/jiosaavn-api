import { describe, expect, it } from 'vitest'
import { channelsApp } from './channels.routes.js'
import { ChannelDetailsSchema, ChannelSchema } from './channels.schema.js'

describe('channels routes', () => {
  it('lists channels with a mood / genre vocabulary', async () => {
    const response = await channelsApp.request('/channels')
    expect(response.status).toBe(200)

    const { data } = (await response.json()) as { data: unknown[] }
    const channels = ChannelSchema.array().parse(data)
    expect(channels.length).toBeGreaterThan(0)
    expect(channels.some((channel) => channel.kind === 'mood')).toBe(true)
    expect(channels.some((channel) => channel.tags.genre.length > 0)).toBe(true)
  })

  it('retrieves a channel with its songs', async () => {
    const list = (await (await channelsApp.request('/channels')).json()) as { data: { id: string }[] }
    const response = await channelsApp.request(`/channels/${list.data[0]!.id}`)
    expect(response.status).toBe(200)

    const { data } = (await response.json()) as { data: unknown }
    const channel = ChannelDetailsSchema.parse(data)
    expect(channel.songs.length).toBeGreaterThan(0)
  })
})
