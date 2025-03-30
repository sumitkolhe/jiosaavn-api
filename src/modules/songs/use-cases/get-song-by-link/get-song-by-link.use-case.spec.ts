import { SongModel } from '#modules/songs/models'
import { GetSongByLinkUseCase } from '#modules/songs/use-cases'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongByLink', () => {
  let getSongByLinkUseCase: GetSongByLinkUseCase

  beforeAll(() => {
    getSongByLinkUseCase = new GetSongByLinkUseCase()
  })

  it('should return a song by link', async () => {
    const song = await getSongByLinkUseCase.execute('OgwhbhtDRwM')

    expect(() => SongModel.parse(song[0])).not.toThrow()
  })

  it('should throw 404 error when song is not found', async () => {
    await expect(getSongByLinkUseCase.execute('invalid-link')).rejects.toThrow(HTTPException)
  })
})
