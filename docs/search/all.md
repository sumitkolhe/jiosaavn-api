---
order: 900
icon: globe
---

# Search All

Search songs, albums, playlists, artists, etc with a query.

+++ Request

HTTP

```bash
https://saavn.me/search/all?query=imagine+dragons
```

CURL

```bash
curl -X GET 'https://saavn.me/search/all?query=imagine+dragons' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "topQuery": {
      "results": [
        {
          "id": "599452",
          "title": "Imagine Dragons",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg"
            }
          ],
          "url": "https://www.jiosaavn.com/artist/imagine-dragons-/f0aFxsa231o_",
          "type": "artist",
          "description": "Artist",
          "position": 1
        }
      ],
      "position": 0
    },
    "songs": {
      "results": [
        {
          "id": "BeXBcbVK",
          "title": "Believer",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            }
          ],
          "album": "Evolve",
          "url": "https://www.jiosaavn.com/song/believer/Mg0zcxdSYXg",
          "type": "song",
          "description": "Imagine Dragons · Evolve",
          "position": 1,
          "primaryArtists": "Imagine Dragons",
          "singers": "Imagine Dragons",
          "language": "english"
        },
        {
          "id": "zikdtWU6",
          "title": "Thunder",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            }
          ],
          "album": "Evolve",
          "url": "https://www.jiosaavn.com/song/thunder/CgEAVQBnYgU",
          "type": "song",
          "description": "Imagine Dragons · Evolve",
          "position": 2,
          "primaryArtists": "Imagine Dragons",
          "singers": "Imagine Dragons",
          "language": "english"
        },
        {
          "id": "yDeAS8Eh",
          "title": "Bones",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            }
          ],
          "album": "Bones",
          "url": "https://www.jiosaavn.com/song/bones/CSwOcCcIcls",
          "type": "song",
          "description": "Imagine Dragons · Bones",
          "position": 3,
          "primaryArtists": "Imagine Dragons",
          "singers": "Imagine Dragons",
          "language": "english"
        }
      ],
      "position": 2
    },
    "albums": {
      "results": [
        {
          "id": "33436571",
          "title": "Bones",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-50x50.jpg"
            }
          ],
          "artist": "Imagine Dragons",
          "url": "https://www.jiosaavn.com/album/bones/8jGpGcwI,fM_",
          "type": "album",
          "description": "2022 · English Album · Imagine Dragons",
          "position": 1,
          "year": "2022",
          "songIds": "yDeAS8Eh",
          "language": "english"
        },
        {
          "id": "13435951",
          "title": "Evolve",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-50x50.jpg"
            }
          ],
          "artist": "Imagine Dragons",
          "url": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
          "type": "album",
          "description": "2018 · English Album · Imagine Dragons",
          "position": 2,
          "year": "2018",
          "songIds": "uQKEtZYc, JM05-GBQ, sZULdFlE, BeXBcbVK, O0F3-PWY, _n4tm2Ws, eOhQat6c, RLWcTXW7, -KYvAnod, zikdtWU6, tRu8-oj5, VmddtEso",
          "language": "english"
        },
        {
          "id": "30690651",
          "title": "Arcane League of Legends (Soundtrack from the Animated Series)",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/273/Arcane-League-of-Legends-Soundtrack-from-the-Animated-Series--English-2021-20211117001130-50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/273/Arcane-League-of-Legends-Soundtrack-from-the-Animated-Series--English-2021-20211117001130-50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/273/Arcane-League-of-Legends-Soundtrack-from-the-Animated-Series--English-2021-20211117001130-50x50.jpg"
            }
          ],
          "artist": "Arcane, League of Legends",
          "url": "https://www.jiosaavn.com/album/arcane-league-of-legends-soundtrack-from-the-animated-series/XLSJOj15a3U_",
          "type": "album",
          "description": "2021 · English Film · Arcane, League of Legends",
          "position": 3,
          "year": "2021",
          "songIds": "iShuYW5v, NihjV1ye, TiIwRuAy, -nAVuln8, NLIW3rG4, Iw6Mkj-M, zUw-eAdj, qv4j6PQc, 5ZhrtDN_, eGGb1baQ, NilyG0mP",
          "language": "english"
        }
      ],
      "position": 3
    },
    "artists": {
      "results": [
        {
          "id": "4992352",
          "title": "Kygo & Imagine Dragons",
          "image": [
            {
              "quality": "50x50",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
            },
            {
              "quality": "150x150",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
            },
            {
              "quality": "500x500",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
            }
          ],
          "url": "https://www.jiosaavn.com/artist/kygo--imagine-dragons-/KCCw9dHrmMY_",
          "type": "artist",
          "description": "Singer",
          "position": 2
        },
        {
          "id": "10540127",
          "title": "In the style of Imagine Dragons",
          "image": [
            {
              "quality": "50x50",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            },
            {
              "quality": "150x150",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            },
            {
              "quality": "500x500",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            }
          ],
          "url": "https://www.jiosaavn.com/artist/in-the-style-of-imagine-dragons-/VDg2ZTmzZ68_",
          "type": "artist",
          "description": "Leadvocalist",
          "position": 3
        },
        {
          "id": "12664018",
          "title": "Imagine Nastya Dragons",
          "image": [
            {
              "quality": "50x50",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            },
            {
              "quality": "150x150",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            },
            {
              "quality": "500x500",
              "link": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
            }
          ],
          "url": "https://www.jiosaavn.com/artist/imagine-nastya-dragons-/OP4t4XcBYrs_",
          "type": "artist",
          "description": "Featuring",
          "position": 4
        }
      ],
      "position": 4
    },
    "playlists": {
      "results": [
        {
          "id": "154025790",
          "title": "Lets Play - Imagine Dragons",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/editorial/logo/RadioactiveHitsImagineDragons_20210903084917_50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/editorial/logo/RadioactiveHitsImagineDragons_20210903084917_50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/editorial/logo/RadioactiveHitsImagineDragons_20210903084917_50x50.jpg"
            }
          ],
          "url": "https://www.jiosaavn.com/featured/lets-play---imagine-dragons/RgGxJg6gKsduOxiEGmm6lQ__",
          "type": "playlist",
          "language": "english",
          "description": "Saavn Editor",
          "position": 1
        },
        {
          "id": "107809244",
          "title": "Imagine Dragons - Spotlight",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/editorial/599452_english_20180806232241_50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/editorial/599452_english_20180806232241_50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/editorial/599452_english_20180806232241_50x50.jpg"
            }
          ],
          "url": "https://www.jiosaavn.com/featured/imagine-dragons---spotlight/-Ajd9gNa0l-ufxkxMEIbIw__",
          "type": "playlist",
          "language": "english",
          "description": "Saavn Editor",
          "position": 2
        },
        {
          "id": "811456996",
          "title": "Imagine Dragons - English - JioTunes",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/editorial/logo/JioTunesImagineDragonsEnglish_20200706062150_50x50.jpg"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/editorial/logo/JioTunesImagineDragonsEnglish_20200706062150_50x50.jpg"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/editorial/logo/JioTunesImagineDragonsEnglish_20200706062150_50x50.jpg"
            }
          ],
          "url": "https://www.jiosaavn.com/featured/imagine-dragons---english---jiotunes/8PPDmhREi8rfemJ68FuXsA__",
          "type": "playlist",
          "language": "english",
          "description": "Saavn Editor",
          "position": 3
        }
      ],
      "position": 1
    }
  }
}
```

+++

| Query Paramter                                 | Description             | Default | Required                                |
| ---------------------------------------- | ----------------------- | ------- | --------------------------------------- |
| [!badge variant="contrast" text="query"]  | Search query            | -       | [!badge variant="primary" text="True"] |
