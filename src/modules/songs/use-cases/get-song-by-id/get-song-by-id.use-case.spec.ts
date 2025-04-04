import { SongModel } from '#modules/songs/models'
import { GetSongByIdUseCase } from '#modules/songs/use-cases'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongById', () => {
  let getSongByIdUseCase: GetSongByIdUseCase

  beforeAll(() => {
    getSongByIdUseCase = new GetSongByIdUseCase()
  })

  it('should return a song by id', async () => {
    const song = await getSongByIdUseCase.execute({ songIds: '3IoDK8qI' })

    expect(() => SongModel.parse(song[0])).not.toThrow()
  })

  it('should return multiple songs by ids', async () => {
    const song = await getSongByIdUseCase.execute({ songIds: '3IoDK8qI,K1P4T0jI' })

    expect(() => SongModel.parse(song[0])).not.toThrow()
  })

  it('should throw 404 error when song is not found', async () => {
    await expect(getSongByIdUseCase.execute({ songIds: 'invalid-id' })).rejects.toThrow(HTTPException)
  })
})
