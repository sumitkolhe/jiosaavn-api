import { CreateSongStationUseCase } from '#modules/songs/use-cases'
import { beforeAll, describe, expect, it } from 'vitest'

describe('CreateSongStation', () => {
  let createSongStationUseCase: CreateSongStationUseCase

  beforeAll(() => {
    createSongStationUseCase = new CreateSongStationUseCase()
  })

  it('should create a song station', async () => {
    const station = await createSongStationUseCase.execute('3IoDK8qI')

    expect(station).toBeDefined()
  })
})
