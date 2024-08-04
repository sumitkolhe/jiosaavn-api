import { SongModel } from '#modules/songs/models'
import { GetSongByLinkUseCase } from '#modules/songs/use-cases'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongByLink', () => {
  let getSongByLink: GetSongByLinkUseCase

  beforeAll(() => {
    getSongByLink = new GetSongByLinkUseCase()
  })

  it('should return a song by link', async () => {
    const song = await getSongByLink.execute('OgwhbhtDRwM')

    expect(() => SongModel.parse(song[0])).not.toThrow()
  })

  it('should throw 404 error when song is not found', async () => {
    await expect(getSongByLink.execute('invalid-link')).rejects.toThrow(HTTPException)
  })
})
