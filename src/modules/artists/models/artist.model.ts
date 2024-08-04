import { DownloadLinkModel } from '#common/models'
import { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { z } from 'zod'

export const ArtistAPIResponseModel = z
  .object({
    artistId: z.string(),
    name: z.string(),
    subtitle: z.string(),
    image: z.string(),
    follower_count: z.string(),
    type: z.string(),
    isVerified: z.boolean(),
    dominantLanguage: z.string(),
    dominantType: z.string(),
    topSongs: z.array(SongAPIResponseModel),
    topAlbums: z.array(AlbumAPIResponseModel),
    singles: z.array(SongAPIResponseModel),
    dedicated_artist_playlist: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          uid: z.string(),
          firstname: z.string(),
          artist_name: z.array(z.string()),
          entity_type: z.string(),
          entity_sub_type: z.string(),
          video_available: z.boolean(),
          is_dolby_content: z.any(),
          sub_types: z.any(),
          images: z.any(),
          lastname: z.string(),
          song_count: z.string(),
          language: z.string()
        }),
        explicit_content: z.string(),
        mini_obj: z.boolean(),
        numsongs: z.number()
      })
    ),
    featured_artist_playlist: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        type: z.string(),
        image: z.string(),
        perma_url: z.string(),
        more_info: z.object({
          uid: z.string(),
          firstname: z.string(),
          artist_name: z.any(),
          entity_type: z.string(),
          entity_sub_type: z.string(),
          video_available: z.boolean(),
          is_dolby_content: z.any(),
          sub_types: z.any(),
          images: z.any(),
          lastname: z.string(),
          song_count: z.string(),
          language: z.string()
        }),
        explicit_content: z.string(),
        mini_obj: z.boolean(),
        numsongs: z.number()
      })
    ),
    similarArtists: z.array(
      z.object({
        _id: z.string(),
        similar: z.string(),
        languages: z.string(),
        isVerified: z.string(),
        image_url: z.string(),
        wiki: z.string(),
        roles: z.string(),
        combine_artist_pages: z.number(),
        webp: z.boolean(),
        search_keywords: z.string(),
        replace_with_primary_artists: z.number(),
        twitter: z.string(),
        dob: z.string(),
        aka: z.string(),
        name: z.string(),
        primary_artist_id: z.string(),
        id: z.string(),
        fb: z.string(),
        bio: z.string(),
        perma_url: z.string(),
        type: z.string(),
        mini_obj: z.boolean(),
        isRadioPresent: z.boolean(),
        dominantType: z.string()
      })
    ),
    isRadioPresent: z.boolean(),
    bio: z.string(),
    dob: z.string(),
    fb: z.string(),
    twitter: z.string(),
    wiki: z.string(),
    urls: z.object({
      albums: z.string(),
      bio: z.string(),
      comments: z.string(),
      songs: z.string(),
      overview: z.string()
    }),
    availableLanguages: z.array(z.string()),
    fan_count: z.string(),
    topEpisodes: z.array(z.any()),
    is_followed: z.boolean()
  })
  .extend({
    id: z.string(),
    perma_url: z.string()
  })

export const ArtistModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  type: z.string(),
  image: z.array(DownloadLinkModel),
  followerCount: z.number().nullable(),
  fanCount: z.string().nullable(),
  isVerified: z.boolean().nullable(),
  dominantLanguage: z.string().nullable(),
  dominantType: z.string().nullable(),
  bio: z
    .array(
      z.object({
        text: z.string().nullable(),
        title: z.string().nullable(),
        sequence: z.number().nullable()
      })
    )
    .nullable(),
  dob: z.string().nullable(),
  fb: z.string().nullable(),
  twitter: z.string().nullable(),
  wiki: z.string().nullable(),
  availableLanguages: z.array(z.string()),
  isRadioPresent: z.boolean().nullable(),
  topSongs: z.array(SongModel).nullable(),
  topAlbums: z.array(AlbumModel).nullable(),
  singles: z.array(SongModel).nullable(),
  similarArtists: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        url: z.string(),
        image: z.array(DownloadLinkModel),
        languages: z.record(z.string(), z.string()).nullable(),
        wiki: z.string(),
        dob: z.string(),
        fb: z.string(),
        twitter: z.string(),
        isRadioPresent: z.boolean(),
        type: z.string(),
        dominantType: z.string(),
        aka: z.string(),
        bio: z.string().nullable(),
        similarArtists: z
          .array(
            z.object({
              id: z.string(),
              name: z.string()
            })
          )
          .nullable()
      })
    )
    .nullable()
})
