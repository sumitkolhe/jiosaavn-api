export interface Endpoint {
  search: {
    /**
     * @description
     * Search for eveything.
     * @endpoint
     * 'autocomplete.get'.
     */
    all: string
    /**
     * @description
     * Search for songs.
     * `search.getResults`
     * @param page - Page number
     * @param limit - Entries per page
     */
    song: string
    album: string
    artist: string
  }
  details: {
    id: {
      song: string
      album: string
      playlist: string
    }
    link: { song: string; album: string }
  }
}
