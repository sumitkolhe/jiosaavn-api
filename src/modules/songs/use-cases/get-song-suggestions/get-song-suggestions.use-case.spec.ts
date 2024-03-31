import { beforeAll, describe, expect, it } from 'vitest'
import { GetSongSuggestionsUseCase } from '#modules/songs/use-cases'
import { SongModel } from '#modules/songs/models'

describe('GetSongSuggestions', () => {
  let getSongSuggestions: GetSongSuggestionsUseCase

  beforeAll(() => {
    getSongSuggestions = new GetSongSuggestionsUseCase()
  })

  it('should return suggestions for a song', async () => {
    const suggestions = await getSongSuggestions.execute({ songId: '8N_6I8Gn', limit: 5 })

    expect(() => SongModel.parse(suggestions[0])).not.toThrow()
    expect(suggestions.length).toBe(5)
  })
})
