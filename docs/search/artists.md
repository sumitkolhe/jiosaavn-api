---
order: 700
icon: person-fill
---

# Search Artists

Search artists by query.

+++ Request

HTTP

```bash
https://saavn.me/search/artists?query=imagine+dragons
```

CURL

```bash
curl -X GET 'https://saavn.me/search/artists?query=imagine+dragons' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 10,
    "start": 1,
    "results": [
      {
        "id": "599452",
        "name": "Imagine Dragons",
        "url": "https://www.jiosaavn.com/artist/imagine-dragons-/f0aFxsa231o_",
        "role": "Artist",
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
        "isRadioPresent": true
      },
      {
        "id": "4992352",
        "name": "Kygo & Imagine Dragons",
        "url": "https://www.jiosaavn.com/artist/kygo--imagine-dragons-/KCCw9dHrmMY_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "10540127",
        "name": "In the style of Imagine Dragons",
        "url": "https://www.jiosaavn.com/artist/in-the-style-of-imagine-dragons-/VDg2ZTmzZ68_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "12664018",
        "name": "Imagine Nastya Dragons",
        "url": "https://www.jiosaavn.com/artist/imagine-nastya-dragons-/OP4t4XcBYrs_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "13217374",
        "name": "Imagine Dragons Publishing",
        "url": "https://www.jiosaavn.com/artist/imagine-dragons-publishing-/mSkvl1xxVKA_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "13646546",
        "name": "INC. OBO IMAGINE DRAGONS PUB",
        "url": "https://www.jiosaavn.com/artist/inc.-obo-imagine-dragons-pub-/oJCAg8iVccM_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "13647141",
        "name": "SONGS OF UNIVERSAL INC OBO IMAGINE DRAGONS PUBLISHING",
        "url": "https://www.jiosaavn.com/artist/songs-of-universal-inc-obo-imagine-dragons-publishing-/B8yvRF,lZ18_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "13947978",
        "name": "Imagine Dragons Publishing/Songs Of Universal",
        "url": "https://www.jiosaavn.com/artist/imagine-dragons-publishing%2Fsongs-of-universal-/29zV6ilDdl0_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "13461219",
        "name": "Imagine Dragons Not Today",
        "url": "https://www.jiosaavn.com/artist/imagine-dragons-not-today-/kLMewTYauC0_",
        "role": "Artist",
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
        "isRadioPresent": false
      },
      {
        "id": "14124856",
        "name": "Songs of Universal Inc Obo Imagine Dragons Pub",
        "url": "https://www.jiosaavn.com/artist/songs-of-universal-inc-obo-imagine-dragons-pub-/Dv4trSdYV9E_",
        "role": "Artist",
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
        "isRadioPresent": false
      }
    ]
  }
}
```

+++

| Query Paramter                                 | Description             | Default | Required                                |
| ---------------------------------------- | ----------------------- | ------- | --------------------------------------- |
| [!badge variant="contrast" text="page"]  | Current page            | 1       | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="limit"] | limit number of results | 10      | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="query"]  | Search query            | -       | [!badge variant="primary" text="True"] |
