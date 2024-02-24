import { createImageLinks } from '../../../common/helpers'
import { createAlbumPayload } from '../../albums/helpers'
import { createSongPayload } from '../../songs/helpers'
import type { Artist, ArtistAPIResponse } from '../types'

export const createArtistPayload = (artist: ArtistAPIResponse): Artist => ({
  id: artist.artistId,
  name: artist.name,
  url: artist.urls?.overview,
  type: artist.type,
  followerCount: artist.follower_count,
  fanCount: artist.fan_count,
  isVerified: artist.isVerified,
  dominantLanguage: artist.dominantLanguage,
  dominantType: artist.dominantType,
  bio: artist.bio && JSON.parse(artist.bio),
  dob: artist.dob,
  fb: artist.fb,
  twitter: artist.twitter,
  wiki: artist.wiki,
  availableLanguages: artist.availableLanguages,
  isRadioPresent: artist.isRadioPresent,
  image: createImageLinks(artist.image),
  topSongs: artist.topSongs?.map(createSongPayload) || [],
  topAlbums: artist.topAlbums?.map(createAlbumPayload) || [],
  singles: artist.singles?.map(createSongPayload) || []
})
