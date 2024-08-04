import {
  SearchAlbumsUseCase,
  SearchAllUseCase,
  SearchArtistsUseCase,
  SearchPlaylistsUseCase,
  SearchSongsUseCase,
  type SearchAlbumsArgs,
  type SearchArtistsArgs,
  type SearchPlaylistsArgs,
  type SearchSongsArgs
} from '#modules/search/use-cases'

export class SearchService {
  private readonly searchAllUseCase: SearchAllUseCase
  private readonly searchSongsUseCase: SearchSongsUseCase
  private readonly searchAlbumsUseCase: SearchAlbumsUseCase
  private readonly searchArtistsUseCase: SearchArtistsUseCase
  private readonly searchPlaylistsUseCase: SearchPlaylistsUseCase

  constructor() {
    this.searchAllUseCase = new SearchAllUseCase()
    this.searchSongsUseCase = new SearchSongsUseCase()
    this.searchAlbumsUseCase = new SearchAlbumsUseCase()
    this.searchArtistsUseCase = new SearchArtistsUseCase()
    this.searchPlaylistsUseCase = new SearchPlaylistsUseCase()
  }

  searchAll = (query: string) => {
    return this.searchAllUseCase.execute(query)
  }

  searchSongs = (args: SearchSongsArgs) => {
    return this.searchSongsUseCase.execute(args)
  }

  searchAlbums = (args: SearchAlbumsArgs) => {
    return this.searchAlbumsUseCase.execute(args)
  }

  searchArtists = (args: SearchArtistsArgs) => {
    return this.searchArtistsUseCase.execute(args)
  }

  searchPlaylists = (args: SearchPlaylistsArgs) => {
    return this.searchPlaylistsUseCase.execute(args)
  }
}
