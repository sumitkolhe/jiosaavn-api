---
order: 999
icon: globe
---

# Search All

Search songs, albums, playlists, artists, etc with a query.

+++ Request

HTTP

```bash
https://saavn.me/search/all?query=image+dragons
```

CURL

```bash
curl -X GET 'https://saavn.me/search/all?query=image+dragons' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "results": {
    "albums": {
      "data": [],
      "position": 3
    },
    "songs": {
      "data": [],
      "position": 2
    },
    "playlists": {
      "data": [
        {
          "id": "154025790",
          "title": "Lets Play - Imagine Dragons",
          "image": "https://c.saavncdn.com/editorial/RadioactiveHitsImagineDragons_20210903084917_50x50.jpg",
          "extra": "Saavn",
          "url": "https://www.jiosaavn.com/featured/lets-play---imagine-dragons/RgGxJg6gKsduOxiEGmm6lQ__",
          "language": "english",
          "type": "playlist",
          "description": "Saavn Editor",
          "position": 1,
          "more_info": null
        },
        {
          "id": "107809244",
          "title": "Imagine Dragons - Spotlight",
          "image": "https://c.saavncdn.com/editorial/599452_english_20180806232241_50x50.jpg",
          "extra": "Saavn",
          "url": "https://www.jiosaavn.com/featured/imagine-dragons---spotlight/-Ajd9gNa0l-ufxkxMEIbIw__",
          "language": "english",
          "type": "playlist",
          "description": "Saavn Editor",
          "position": 2,
          "more_info": null
        },
        {
          "id": "811456996",
          "title": "Imagine Dragons - English - JioTunes",
          "image": "https://c.saavncdn.com/editorial/JioTunesImagineDragonsEnglish_20200706062150_50x50.jpg",
          "extra": "Saavn",
          "url": "https://www.jiosaavn.com/featured/imagine-dragons---english---jiotunes/8PPDmhREi8rfemJ68FuXsA__",
          "language": "english",
          "type": "playlist",
          "description": "Saavn Editor",
          "position": 3,
          "more_info": null
        }
      ],
      "position": 1
    },
    "artists": {
      "data": [
        {
          "id": "4992352",
          "title": "Kygo & Imagine Dragons",
          "image": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png",
          "extra": "singer",
          "url": "https://www.jiosaavn.com/artist/kygo--imagine-dragons-/KCCw9dHrmMY_",
          "type": "artist",
          "description": "Singer",
          "ctr": 0,
          "entity": 0,
          "position": 2
        },
        {
          "id": "10540127",
          "title": "In the style of Imagine Dragons",
          "image": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png",
          "extra": "leadvocalist",
          "url": "https://www.jiosaavn.com/artist/in-the-style-of-imagine-dragons-/VDg2ZTmzZ68_",
          "type": "artist",
          "description": "Leadvocalist",
          "ctr": 0,
          "entity": 0,
          "position": 3
        }
      ],
      "position": 4
    },
    "topquery": {
      "data": [
        {
          "id": "599452",
          "title": "Imagine Dragons",
          "image": "https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg",
          "extra": "singer",
          "url": "https://www.jiosaavn.com/artist/imagine-dragons-/f0aFxsa231o_",
          "type": "artist",
          "description": "Artist",
          "ctr": 1760,
          "entity": 1,
          "position": 1
        }
      ],
      "position": 0
    },
    "shows": {
      "data": [],
      "position": 5
    },
    "episodes": {
      "data": [],
      "position": 6
    }
  }
}
```

+++
