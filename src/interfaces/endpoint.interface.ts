export interface Endpoint {
  search: {
    /**
     * Search for eveything.
     * @endpoint
     * 'autocomplete.get'.
     * @isVersion4 false
     */
    all: string
    /**
     * Search for songs.
     * @endpoint
     * `search.getResults`
     * @isVersion4 false
     * @param page - Page number
     * @param limit - Entries per page
     */
    songs: string
    /**
     * Search for albums.
     * @endpoint
     * `search.getAlbumResults`
     * @isVersion4 true
     * @param page - Page number
     * @param limit - Entries per page
     */
    albums: string
    /**
     * Search for playlists.
     * @endpoint
     * `search.getPlaylistResults`
     * @isVersion4 false
     * @param page - Page number
     * @param limit - Entries per page
     */
    playlists: string
    /**
     * Search for artists.
     * @endpoint
     * `search.getArtistResults`
     * @isVersion4 false
     * @param page - Page number
     * @param limit - Entries per page
     */
    artists: string
  }
  songs: {
    /**
     * Get song details by song id.
     * @endpoint
     * `song.getDetails`
     * @isVersion4 false
     */
    id: string
    /**
     * Get song details by song link.
     * @endpoint
     * `webapi.get`
     * @isVersion4 false
     */
    link: string
  }
  albums: {
    /**
     * Get album details by album id.
     * @endpoint
     * `content.getAlbumDetails`
     * @isVersion4 false
     */
    id: string
    /**
     * Get album details by album link.
     * @endpoint
     * `webapi.get`
     * @isVersion4 false
     */
    link: string
  }
  playlists: {
    /**
     * Get playlist details by playlist id.
     * @endpoint
     * `playlist.getDetails`
     * @isVersion4 false
     */
    id: string
  }
  artists: {
    id: string
  }
}
