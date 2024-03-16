import { beforeAll, describe, expect, test } from 'vitest'
import { GetSongByLinkUseCase } from '#modules/songs/use-cases'

describe('GetSongByLink', () => {
  let getSongByLink: GetSongByLinkUseCase

  beforeAll(() => {
    getSongByLink = new GetSongByLinkUseCase()
  })

  test('should return a song by link', async () => {
    const song = await getSongByLink.execute('OgwhbhtDRwM')

    expect(song).toBeDefined()
    expect(song).toHaveLength(1)
  })
})
