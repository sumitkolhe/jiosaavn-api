import { SearchService } from '../services/search.service'
import { globalConstants } from '../constants'
import { AlbumService } from '../services/albums.service'
import { SongService } from '../services/song.service'
import { MiscellaneousService } from '../services/misc.service'
import { PlaylistService } from '../services/playlist.service'
import { Utils } from '../utils'
import type { RequestHandler } from 'express'

export class Controller {
  // get homepage data
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await MiscellaneousService.home()

      res.json({ status: globalConstants.status.success, results: homeData })
    } catch (error) {
      next(error)
    }
  }

  // search everything i.e songs, artists, albums, etc
  public static searchAll: RequestHandler = async (req, res, next) => {
    try {
      const { query } = req.query

      const allSearchResults = await SearchService.searchAll(query as string)

      res.json({ status: globalConstants.status.success, results: allSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // search songs (includes download links)
  public static searchSongs: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const songSearchResults = await SearchService.searchSongs(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, results: songSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // search albums only
  public static searchAlbums: RequestHandler = async (req, res, next) => {
    try {
      const { query, page, limit } = req.query

      const albumSearchResults = await SearchService.searchAlbums(query as string, page as string, limit as string)

      res.json({ status: globalConstants.status.success, results: albumSearchResults })
    } catch (error) {
      next(error)
    }
  }

  // get top charts
  public static charts: RequestHandler = async (_req, res, next) => {
    try {
      const charts = await MiscellaneousService.charts()

      res.json({ status: globalConstants.status.success, results: charts })
    } catch (error) {
      next(error)
    }
  }

  // get trending media
  public static trending: RequestHandler = async (_req, res, next) => {
    try {
      const trending = await MiscellaneousService.trending()

      res.json({ status: globalConstants.status.success, results: trending })
    } catch (error) {
      next(error)
    }
  }

  // get playlists / playlist details
  public static playlists: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      // if id query exists get playlist details
      if (id) {
        const playlistDetails = await PlaylistService.playlistDetails(id as string)

        res.json({ status: globalConstants.status.success, results: playlistDetails })
      } else {
        const { language } = req.query

        // set default playlist language to english
        const playlists = await PlaylistService.playlists((language as string) || 'english')

        res.json({ status: globalConstants.status.success, results: playlists })
      }
    } catch (error) {
      next(error)
    }
  }

  // get album details
  public static albumDetails: RequestHandler = async (req, res, next) => {
    try {
      const identifier = Utils.createIdentifier(req, 'album')

      const albumDetails = await AlbumService.albumDetails(identifier)

      res.json({ status: globalConstants.status.success, results: albumDetails })
    } catch (error) {
      next(error)
    }
  }

  // get song details
  public static songDetails: RequestHandler = async (req, res, next) => {
    try {
      const identifier = Utils.createIdentifier(req, 'song')

      const songDetails = await SongService.songDetails(identifier)

      res.json({ status: globalConstants.status.success, results: songDetails })
    } catch (error) {
      next(error)
    }
  }

  // get lyrics
  public static lyrics: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.query

      const songLyrics = await MiscellaneousService.lyrics(id as string)

      res.json({ status: globalConstants.status.success, results: songLyrics })
    } catch (error) {
      next(error)
    }
  }
}
