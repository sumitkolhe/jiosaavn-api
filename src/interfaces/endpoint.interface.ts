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
  songs: {
    id: string
    link: string
  }
  albums: {
    id: string
    link: string
  }
  playlists: {
    id: string
  }
}
