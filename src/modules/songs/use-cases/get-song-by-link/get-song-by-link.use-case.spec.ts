import { beforeAll, describe, expect, it } from 'vitest'
import { HTTPException } from 'hono/http-exception'
import { GetSongByLinkUseCase } from '#modules/songs/use-cases'

describe('GetSongByLink', () => {
  let getSongByLink: GetSongByLinkUseCase

  beforeAll(() => {
    getSongByLink = new GetSongByLinkUseCase()
  })

  it('should return a song by link', async () => {
    const song = await getSongByLink.execute('OgwhbhtDRwM')

    expect(song[0]).toMatchSnapshot({
      playCount: expect.any(Number)
    })
  })

  it('should throw 404 error when song is not found', async () => {
    await expect(getSongByLink.execute('invalid-link')).rejects.toThrow(HTTPException)
  })
})
