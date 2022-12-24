---
order: 10
icon: person-fill
---

# Artist Details

## Artist details by link

+++ Request

HTTP

```bash
https://saavn.me/artists?link=https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_
```

CURL

```bash
curl -X GET 'https://saavn.me/artists?link=https://www.jiosaavn.com/song/thunderclouds/RT8zcBh9eUc' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "id": "568707",
    "name": "Sia",
    "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
    "image": [
      {
        "quality": "50x50",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_50x50.jpg"
      },
      {
        "quality": "150x150",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_150x150.jpg"
      },
      {
        "quality": "500x500",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_500x500.jpg"
      }
    ],
    "followerCount": "71752",
    "fanCount": "963569",
    "isVerified": false,
    "dominantLanguage": "english",
    "dominantType": "singer",
    "bio": [],
    "dob": "",
    "fb": "",
    "twitter": "",
    "wiki": "https://en.wikipedia.org/wiki/Sia_Furler",
    "availableLanguages": [
      "english",
      "unknown",
      "spanish",
      "italian",
      "french",
      "portuguese",
      "german",
      "indonesian",
      "chinese",
      "finnish"
    ],
    "isRadioPresent": true
  }
}
```

+++

| Query Paramter                                | Description                           | Required                               |
| --------------------------------------- | ------------------------------------- | -------------------------------------- |
| [!badge variant="contrast" text="link"] | Song link from <https://jiosaavn.com> | [!badge variant="primary" text="True"] |

## Artist details by artist ID

+++ Request

HTTP

```bash
https://saavn.me/artists?id=568707
```

CURL

```bash
curl -X GET 'https://saavn.me/artists?id=568707' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "id": "568707",
    "name": "Sia",
    "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
    "image": [
      {
        "quality": "50x50",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_50x50.jpg"
      },
      {
        "quality": "150x150",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_150x150.jpg"
      },
      {
        "quality": "500x500",
        "link": "https://c.saavncdn.com/artists/Sia_002_20200921152829_500x500.jpg"
      }
    ],
    "followerCount": "71752",
    "fanCount": "963569",
    "isVerified": false,
    "dominantLanguage": "english",
    "dominantType": "singer",
    "bio": [],
    "dob": "",
    "fb": "",
    "twitter": "",
    "wiki": "https://en.wikipedia.org/wiki/Sia_Furler",
    "availableLanguages": [
      "english",
      "unknown",
      "spanish",
      "italian",
      "french",
      "portuguese",
      "german",
      "indonesian",
      "chinese",
      "finnish"
    ],
    "isRadioPresent": true
  }
}
```

+++

| Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Artist ID     | [!badge variant="primary" text="True"] |

## Artist Songs by artist ID

+++ Request

HTTP

```bash
https://saavn.me/artists/568707/songs?page=1
```

CURL

```bash
curl -X GET 'https://saavn.me/artists/568707/songs?page=1' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 980,
    "lastPage": false,
    "results": [
      {
        "id": "t5e4VTsk",
        "name": "Unstoppable",
        "album": {
          "id": "1759517",
          "name": "Unstoppable",
          "url": "https://www.jiosaavn.com/album/unstoppable/1Tm2aGl16CM_"
        },
        "year": "2016",
        "releaseDate": null,
        "duration": "218",
        "label": "Monkey Puzzle Records/RCA Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/unstoppable/BF0OBSJkRFg",
        "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_320.mp4"
          }
        ]
      },
      {
        "id": "4RmwbCw4",
        "name": "Cheap Thrills",
        "album": {
          "id": "1744101",
          "name": "Cheap Thrills",
          "url": "https://www.jiosaavn.com/album/cheap-thrills/d-w-VzXfYCU_"
        },
        "year": "2015",
        "releaseDate": null,
        "duration": "210",
        "label": "Monkey Puzzle Records/RCA Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/cheap-thrills/RDoGRhZzQAc",
        "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_320.mp4"
          }
        ]
      },
      {
        "id": "vU96z8LR",
        "name": "Floating Through Space",
        "album": {
          "id": "25126009",
          "name": "Floating Through Space",
          "url": "https://www.jiosaavn.com/album/floating-through-space/tJ88-kjlNk8_"
        },
        "year": "2021",
        "releaseDate": null,
        "duration": "177",
        "label": "Monkey Puzzle/Atlantic",
        "primaryArtists": "Sia, David Guetta",
        "primaryArtistsId": "568707, 568665",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/floating-through-space/Bj1SBw4Ie2E",
        "copyright": "under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States., ℗ 2021 Monkey Puzzle Music, Inc.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_320.mp4"
          }
        ]
      },
      {
        "id": "qnFPUVVn",
        "name": "Never Give Up",
        "album": {
          "id": "3031864",
          "name": "Never Give Up (From &quot;Lion&quot; Soundtrack)",
          "url": "https://www.jiosaavn.com/album/never-give-up-from-lion-soundtrack/Ls,mAR4z-D4_"
        },
        "year": "2016",
        "releaseDate": null,
        "duration": "222",
        "label": "Masterworks",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/never-give-up/AQYtYSFmYV0",
        "copyright": "(P) 2016 Monkey Puzzle Records Inc.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_320.mp4"
          }
        ]
      },
      {
        "id": "n2PC-t5G",
        "name": "Snowman",
        "album": {
          "id": "16226559",
          "name": "Snowman",
          "url": "https://www.jiosaavn.com/album/snowman/Hv8ASgjBPA4_"
        },
        "year": "2017",
        "releaseDate": null,
        "duration": "165",
        "label": "Monkey Puzzle/Atlantic",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/snowman/Hlo7cllEAnQ",
        "copyright": "℗ 2017 Monkey Puzzle Music, Inc., under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_320.mp4"
          }
        ]
      },
      {
        "id": "WrPt4dDP",
        "name": "Cheap Thrills",
        "album": {
          "id": "1839881",
          "name": "Cheap Thrills",
          "url": "https://www.jiosaavn.com/album/cheap-thrills/wjWyr9dmbek_"
        },
        "year": "2016",
        "releaseDate": null,
        "duration": "224",
        "label": "Monkey Puzzle Records/RCA Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "Sean Paul",
        "featuredArtistsId": "468845",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/cheap-thrills/Jxo7RUBUc2M",
        "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/930/Cheap-Thrills-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/930/Cheap-Thrills-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/930/Cheap-Thrills-English-2016-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/930/76d580d9905867aff1c363cbdb033abe_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/930/76d580d9905867aff1c363cbdb033abe_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/930/76d580d9905867aff1c363cbdb033abe_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/930/76d580d9905867aff1c363cbdb033abe_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/930/76d580d9905867aff1c363cbdb033abe_320.mp4"
          }
        ]
      },
      {
        "id": "m5dBCY1k",
        "name": "Chandelier",
        "album": {
          "id": "1152146",
          "name": "Chandelier",
          "url": "https://www.jiosaavn.com/album/chandelier/UiL9E3H6XDc_"
        },
        "year": "2014",
        "releaseDate": null,
        "duration": "216",
        "label": "Monkey Puzzle Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/chandelier/HV0PczdpBlg",
        "copyright": "(P) 2014 Monkey Puzzle Records, under exclusive license to RCA Records",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/952/Chandelier-2014-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/952/Chandelier-2014-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/952/Chandelier-2014-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_320.mp4"
          }
        ]
      },
      {
        "id": "_lX2W2a_",
        "name": "Let's Love",
        "album": {
          "id": "22338976",
          "name": "Let's Love",
          "url": "https://www.jiosaavn.com/album/lets-love/NrF9-Vkuiu4_"
        },
        "year": "2020",
        "releaseDate": null,
        "duration": "200",
        "label": "Parlophone (France)",
        "primaryArtists": "David Guetta, Sia",
        "primaryArtistsId": "568665, 568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/lets-love/LwQzAyMCVmw",
        "copyright": "Under Exclusive Licence to Warner Music France, Label Parlophone, ℗ 2020 What A Producer Ltd",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_320.mp4"
          }
        ]
      },
      {
        "id": "URuxt8q-",
        "name": "The Greatest",
        "album": {
          "id": "2786558",
          "name": "This Is Acting (Deluxe Version)",
          "url": "https://www.jiosaavn.com/album/this-is-acting-deluxe-version/vmjUuWv7xeY_"
        },
        "year": "2016",
        "releaseDate": null,
        "duration": "210",
        "label": "Monkey Puzzle Records/RCA Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "Kendrick Lamar",
        "featuredArtistsId": "612060",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/the-greatest/JToeSQAIRh4",
        "copyright": "(P) 2016 Monkey Puzzle Records, under exclusive license to RCA Records",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_320.mp4"
          }
        ]
      },
      {
        "id": "wGWwbFVX",
        "name": "Courage to Change",
        "album": {
          "id": "22703343",
          "name": "Courage to Change",
          "url": "https://www.jiosaavn.com/album/courage-to-change/9ePIgBpmNqo_"
        },
        "year": "2020",
        "releaseDate": null,
        "duration": "292",
        "label": "Atlantic Records",
        "primaryArtists": "Sia",
        "primaryArtistsId": "568707",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": null,
        "language": "english",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/courage-to-change/By88RhZ2YWs",
        "copyright": "under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States., ℗ 2020 Monkey Puzzle Music, Inc.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_320.mp4"
          }
        ]
      }
    ]
  }
}
```

+++

| Route Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Artist ID     | [!badge variant="primary" text="True"] |

| Query Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="page"] | Page Number  | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="category"] | Song type. `alphabetical` or `latest`  | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="sort"] | Song sort order. `asc` or `desc`  | [!badge variant="primary" text="False"] |

## Artist Albums by artist ID

+++ Request

HTTP

```bash
https://saavn.me/artists/568707/albums?page=1
```

CURL

```bash
curl -X GET 'https://saavn.me/artists/568707/albums?page=1' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 57,
    "lastPage": false,
    "results": [
      {
        "id": "1759503",
        "name": "This Is Acting",
        "year": "2016",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "12",
        "url": "https://www.jiosaavn.com/album/this-is-acting/WvjkPt-7qiM_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "580548",
            "name": "Jack Antonoff",
            "url": "https://www.jiosaavn.com/artist/jack-antonoff-/rdoVp6QHYCs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568885",
            "name": "Tyler Williams",
            "url": "https://www.jiosaavn.com/artist/tyler-williams-/Pwm9Pf4a4Dw_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1809857",
            "name": "Josh Valle",
            "url": "https://www.jiosaavn.com/artist/josh-valle-/ZGXtFTe5F0M_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "658348",
            "name": "Nikhil Seetharam",
            "url": "https://www.jiosaavn.com/artist/nikhil-seetharam-/f,NXTNVFgbY_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566183",
            "name": "Greg Kurstin",
            "url": "https://www.jiosaavn.com/artist/greg-kurstin-/KfmpE496lLA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "567638",
            "name": "Mark Andrews",
            "url": "https://www.jiosaavn.com/artist/mark-andrews-/EBiUvCCC75Y_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521247",
            "name": "Robi Rosa",
            "url": "https://www.jiosaavn.com/artist/robi-rosa-/nH4jzHB1eU8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "528601",
            "name": "Joseph Longo",
            "url": "https://www.jiosaavn.com/artist/joseph-longo-/fitKyUh5m5w_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521379",
            "name": "Tim Kelley",
            "url": "https://www.jiosaavn.com/artist/tim-kelley-/aebxpLoe,-U_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521378",
            "name": "Bob Robinson",
            "url": "https://www.jiosaavn.com/artist/bob-robinson-/4gMkspcfaJk_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "514316",
            "name": "Desmond Child",
            "url": "https://www.jiosaavn.com/artist/desmond-child-/WqYX6MVgD44_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "567639",
            "name": "Marquis Collins",
            "url": "https://www.jiosaavn.com/artist/marquis-collins-/7ETnh6oBCZ0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "698278",
            "name": "Jesse Shatkin",
            "url": "https://www.jiosaavn.com/artist/jesse-shatkin-/oDkTzAkwnpM_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "841304",
            "name": "Jasper Leak",
            "url": "https://www.jiosaavn.com/artist/jasper-leak-/3wncemq56Ok_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568164",
            "name": "Christopher Braide",
            "url": "https://www.jiosaavn.com/artist/christopher-braide-/sfw1RUQUD4E_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "610905",
            "name": "Adele",
            "url": "https://www.jiosaavn.com/artist/adele-/yc6n84bIDm8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "4039753",
            "name": "Tobias Jesso",
            "url": "https://www.jiosaavn.com/artist/tobias-jesso-/E4ylhEcVbHw_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "527097",
            "name": "Jr.",
            "url": "https://www.jiosaavn.com/artist/jr.-/mZP,lrb0a3I_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "615569",
            "name": "Kanye West",
            "url": "https://www.jiosaavn.com/artist/kanye-west-/dvjzF8PFk8w_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1505445",
            "name": "Noah Goldstein",
            "url": "https://www.jiosaavn.com/artist/noah-goldstein-/I3Z0dlMrpbk_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1809855",
            "name": "Charles Misodi Njapa",
            "url": "https://www.jiosaavn.com/artist/charles-misodi-njapa-/zXGkG0Y-eUA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "",
            "name": "Dom $olo",
            "url": "https://www.jiosaavn.com/artist/dom-%24olo-/",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "1809856",
            "name": "Erick Serna",
            "url": "https://www.jiosaavn.com/artist/erick-serna-/RfwjFKq80w4_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "29087438",
        "name": "Titanium (feat. Sia) (David Guetta &amp; MORTEN Future Rave Remix)",
        "year": "2021",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "2",
        "url": "https://www.jiosaavn.com/album/titanium-feat.-sia-david-guetta--morten-future-rave-remix/o4lA-vfOkD0_",
        "primaryArtists": [
          {
            "id": "568665",
            "name": "David Guetta",
            "url": "https://www.jiosaavn.com/artist/david-guetta-/AnfLTAoYH1I_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568665",
            "name": "David Guetta",
            "url": "https://www.jiosaavn.com/artist/david-guetta-/AnfLTAoYH1I_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/425/Titanium-feat-Sia-David-Guetta-MORTEN-Future-Rave-Remix--English-2021-20210817122153-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/425/Titanium-feat-Sia-David-Guetta-MORTEN-Future-Rave-Remix--English-2021-20210817122153-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/425/Titanium-feat-Sia-David-Guetta-MORTEN-Future-Rave-Remix--English-2021-20210817122153-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "2786558",
        "name": "This Is Acting (Deluxe Version)",
        "year": "2016",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "19",
        "url": "https://www.jiosaavn.com/album/this-is-acting-deluxe-version/vmjUuWv7xeY_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566183",
            "name": "Greg Kurstin",
            "url": "https://www.jiosaavn.com/artist/greg-kurstin-/KfmpE496lLA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "610905",
            "name": "Adele",
            "url": "https://www.jiosaavn.com/artist/adele-/yc6n84bIDm8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "4039753",
            "name": "Tobias Jesso",
            "url": "https://www.jiosaavn.com/artist/tobias-jesso-/E4ylhEcVbHw_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "698278",
            "name": "Jr.",
            "url": "https://www.jiosaavn.com/artist/jr.-/oDkTzAkwnpM_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568164",
            "name": "Jesse Shatkin",
            "url": "https://www.jiosaavn.com/artist/jesse-shatkin-/sfw1RUQUD4E_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "527097",
            "name": "Christopher Braide",
            "url": "https://www.jiosaavn.com/artist/christopher-braide-/mZP,lrb0a3I_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "615569",
            "name": "Kanye West",
            "url": "https://www.jiosaavn.com/artist/kanye-west-/dvjzF8PFk8w_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1505445",
            "name": "Noah Goldstein",
            "url": "https://www.jiosaavn.com/artist/noah-goldstein-/I3Z0dlMrpbk_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1809855",
            "name": "Charles Misodi Njapa",
            "url": "https://www.jiosaavn.com/artist/charles-misodi-njapa-/zXGkG0Y-eUA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "580548",
            "name": "Dom $olo",
            "url": "https://www.jiosaavn.com/artist/dom-%24olo-/rdoVp6QHYCs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568885",
            "name": "Jack Antonoff",
            "url": "https://www.jiosaavn.com/artist/jack-antonoff-/Pwm9Pf4a4Dw_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1809857",
            "name": "Tyler Williams",
            "url": "https://www.jiosaavn.com/artist/tyler-williams-/ZGXtFTe5F0M_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "658348",
            "name": "Josh Valle",
            "url": "https://www.jiosaavn.com/artist/josh-valle-/f,NXTNVFgbY_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "567638",
            "name": "Nikhil Seetharam",
            "url": "https://www.jiosaavn.com/artist/nikhil-seetharam-/EBiUvCCC75Y_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521247",
            "name": "Mark Andrews",
            "url": "https://www.jiosaavn.com/artist/mark-andrews-/nH4jzHB1eU8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "528601",
            "name": "Robi Rosa",
            "url": "https://www.jiosaavn.com/artist/robi-rosa-/fitKyUh5m5w_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521379",
            "name": "Joseph Longo",
            "url": "https://www.jiosaavn.com/artist/joseph-longo-/aebxpLoe,-U_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "521378",
            "name": "Tim Kelley",
            "url": "https://www.jiosaavn.com/artist/tim-kelley-/4gMkspcfaJk_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "514316",
            "name": "Bob Robinson",
            "url": "https://www.jiosaavn.com/artist/bob-robinson-/WqYX6MVgD44_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "567639",
            "name": "Desmond Child",
            "url": "https://www.jiosaavn.com/artist/desmond-child-/7ETnh6oBCZ0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "841304",
            "name": "Marquis Collins",
            "url": "https://www.jiosaavn.com/artist/marquis-collins-/3wncemq56Ok_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "562807",
            "name": "Jasper Leak",
            "url": "https://www.jiosaavn.com/artist/jasper-leak-/YEox-ir-av8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "612060",
            "name": "Sean Paul Henriques",
            "url": "https://www.jiosaavn.com/artist/sean-paul-henriques-/44fbKDllOW0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "565825",
            "name": "Kendrick Lamar",
            "url": "https://www.jiosaavn.com/artist/kendrick-lamar-/rUr,7Yz1jT4_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566134",
            "name": "Blair Mackichan",
            "url": "https://www.jiosaavn.com/artist/blair-mackichan-/d5KhRR8LS28_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "",
            "name": "Samuel Dixon",
            "url": "https://www.jiosaavn.com/artist/samuel-dixon-/",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "1809856",
            "name": "Erick Serna",
            "url": "https://www.jiosaavn.com/artist/erick-serna-/RfwjFKq80w4_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "468845",
            "name": "Sean Paul",
            "url": "https://www.jiosaavn.com/artist/sean-paul-/GQPg5UvdL60_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "612060",
            "name": "Kendrick Lamar",
            "url": "https://www.jiosaavn.com/artist/kendrick-lamar-/44fbKDllOW0_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "11562344",
        "name": "Dusk Till Dawn (The Remixes)",
        "year": "2017",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "3",
        "url": "https://www.jiosaavn.com/album/dusk-till-dawn-the-remixes/6cqlL2lgIi4_",
        "primaryArtists": [
          {
            "id": "577203",
            "name": "Zayn Malik",
            "url": "https://www.jiosaavn.com/artist/zayn-malik-/SGRc0EuPzQ0_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "577203",
            "name": "Zayn Malik",
            "url": "https://www.jiosaavn.com/artist/zayn-malik-/SGRc0EuPzQ0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566183",
            "name": "Greg Kurstin",
            "url": "https://www.jiosaavn.com/artist/greg-kurstin-/KfmpE496lLA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1058756",
            "name": "Alex Oriet",
            "url": "https://www.jiosaavn.com/artist/alex-oriet-/IC9qG5bDZ-A_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1058759",
            "name": "David Phelan",
            "url": "https://www.jiosaavn.com/artist/david-phelan-/aYbTv-ITL,4_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "577203",
            "name": "Zayn Malik",
            "url": "https://www.jiosaavn.com/artist/zayn-malik-/SGRc0EuPzQ0_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "1274161",
            "name": "Luca Lush",
            "url": "https://www.jiosaavn.com/artist/luca-lush-/7h5ntdXAcT0_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "3917762",
            "name": "ZAYN x Luca Lush",
            "url": "https://www.jiosaavn.com/artist/zayn-x-luca-lush-/14df6wmWOfQ_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/643/Dusk-Till-Dawn-The-Remixes--English-2017-20170927012006-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/643/Dusk-Till-Dawn-The-Remixes--English-2017-20170927012006-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/643/Dusk-Till-Dawn-The-Remixes--English-2017-20170927012006-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "1209835",
        "name": "Breathe Me",
        "year": "2006",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "2",
        "url": "https://www.jiosaavn.com/album/breathe-me/6dbtDnnxZ6c_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568708",
            "name": "Dan Carey",
            "url": "https://www.jiosaavn.com/artist/dan-carey-/uF2vWqmZEJs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/850/Breathe-Me-English-2006-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/850/Breathe-Me-English-2006-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/850/Breathe-Me-English-2006-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "16292374",
        "name": "Titanium (feat. Sia)",
        "year": "2011",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "5",
        "url": "https://www.jiosaavn.com/album/titanium-feat.-sia/TEMGHDQpc48_",
        "primaryArtists": [
          {
            "id": "568665",
            "name": "David Guetta",
            "url": "https://www.jiosaavn.com/artist/david-guetta-/AnfLTAoYH1I_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568665",
            "name": "David Guetta",
            "url": "https://www.jiosaavn.com/artist/david-guetta-/AnfLTAoYH1I_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/752/Titanium-feat-Sia--English-2011-20190607045907-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/752/Titanium-feat-Sia--English-2011-20190607045907-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/752/Titanium-feat-Sia--English-2011-20190607045907-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "12625205",
        "name": "Clap Your Hands",
        "year": "2010",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "3",
        "url": "https://www.jiosaavn.com/album/clap-your-hands/XIxUtxFutYQ_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566134",
            "name": "Samuel Dixon",
            "url": "https://www.jiosaavn.com/artist/samuel-dixon-/d5KhRR8LS28_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/076/Clap-Your-Hands-English-2010-20180409212120-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/076/Clap-Your-Hands-English-2010-20180409212120-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/076/Clap-Your-Hands-English-2010-20180409212120-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "2168241",
        "name": "Cheap Thrills (Remixes)",
        "year": "2016",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "7",
        "url": "https://www.jiosaavn.com/album/cheap-thrills-remixes/JOfHNPDEC9Q_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566183",
            "name": "Greg Kurstin",
            "url": "https://www.jiosaavn.com/artist/greg-kurstin-/KfmpE496lLA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "562807",
            "name": "Sean Paul Henriques",
            "url": "https://www.jiosaavn.com/artist/sean-paul-henriques-/YEox-ir-av8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "468845",
            "name": "Sean Paul",
            "url": "https://www.jiosaavn.com/artist/sean-paul-/GQPg5UvdL60_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/330/Cheap-Thrills-Remixes-English-2016-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/330/Cheap-Thrills-Remixes-English-2016-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/330/Cheap-Thrills-Remixes-English-2016-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "1100925",
        "name": "We Are Born",
        "year": "2010",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "13",
        "url": "https://www.jiosaavn.com/album/we-are-born/2SDibEmF714_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568708",
            "name": "Dan Carey",
            "url": "https://www.jiosaavn.com/artist/dan-carey-/uF2vWqmZEJs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566134",
            "name": "Samuel Dixon",
            "url": "https://www.jiosaavn.com/artist/samuel-dixon-/d5KhRR8LS28_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "566183",
            "name": "Greg Kurstin",
            "url": "https://www.jiosaavn.com/artist/greg-kurstin-/KfmpE496lLA_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568709",
            "name": "Lauren Flax",
            "url": "https://www.jiosaavn.com/artist/lauren-flax-/XrnypPu9TFQ_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "527401",
            "name": "Simon Katz",
            "url": "https://www.jiosaavn.com/artist/simon-katz-/PCxzvWJOBdY_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568710",
            "name": "Jesse Graham",
            "url": "https://www.jiosaavn.com/artist/jesse-graham-/Y3l7k7SgHc4_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568711",
            "name": "Henry Binns",
            "url": "https://www.jiosaavn.com/artist/henry-binns-/sOAewcqB3I0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568712",
            "name": "Ciccone",
            "url": "https://www.jiosaavn.com/artist/ciccone-/NWn6ifcYHRM_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568713",
            "name": "Leonard",
            "url": "https://www.jiosaavn.com/artist/leonard-/xJS,lw2ESN8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/045/We-Are-Born-2010-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/045/We-Are-Born-2010-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/045/We-Are-Born-2010-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "25290812",
        "name": "Music (Songs From And Inspired By The Motion Picture)",
        "year": "2021",
        "playCount": "",
        "language": "english",
        "explicitContent": "0",
        "songCount": "14",
        "url": "https://www.jiosaavn.com/album/music-songs-from-and-inspired-by-the-motion-picture/T1uHfvBs6Ik_",
        "primaryArtists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "artists": [
          {
            "id": "568707",
            "name": "Sia",
            "url": "https://www.jiosaavn.com/artist/sia-/C4hxFiXrHws_",
            "image": false,
            "type": "artist",
            "role": "singers"
          },
          {
            "id": "568665",
            "name": "David Guetta",
            "url": "https://www.jiosaavn.com/artist/david-guetta-/AnfLTAoYH1I_",
            "image": false,
            "type": "artist",
            "role": "singers"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/780/Music-Songs-From-And-Inspired-By-The-Motion-Picture--English-2021-20210212055715-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/780/Music-Songs-From-And-Inspired-By-The-Motion-Picture--English-2021-20210212055715-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/780/Music-Songs-From-And-Inspired-By-The-Motion-Picture--English-2021-20210212055715-500x500.jpg"
          }
        ],
        "songs": []
      }
    ]
  }
}
```

+++

| Route Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Artist ID     | [!badge variant="primary" text="True"] |

| Query Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="page"] | Page Number  | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="category"] | Album type. `alphabetical` or `latest`  | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="sort"] | Album sort order. `asc` or `desc`  | [!badge variant="primary" text="False"] |

## Artist Recommended Songs by artist ID and song ID

!!!
Note: Song ID is required to get the recommendations based on the song.
!!!

+++ Request

HTTP

```bash
https://saavn.me/artists/568707/recommendations/zikdtWU6
```

CURL

```bash
curl -X GET 'https://saavn.me/artists/568707/recommendations/zikdtWU6' \
 -H 'content-type: application/json'
```


+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": [
    {
      "id": "jPaBa3UM",
      "name": "Genius",
      "type": "",
      "album": {
        "id": "12791562",
        "name": "Genius",
        "url": "https://www.jiosaavn.com/album/genius/nSfwzzD90wk_"
      },
      "year": "2018",
      "releaseDate": "2018-05-03",
      "duration": "216",
      "label": "Records/Columbia",
      "primaryArtists": "Lsd",
      "primaryArtistsId": "1153577",
      "featuredArtists": "Sia, Diplo, Labrinth, Sia, Diplo, And Labrinth",
      "featuredArtistsId": "568707, 599061, 577223, 4799650",
      "explicitContent": 0,
      "playCount": 2479365,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/genius/GjgKcxUDYn4",
      "copyright": "(P) 2018 RECORDS, LLC / Columbia",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/509/Genius-English-2018-20180503113343-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/509/Genius-English-2018-20180503113343-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/509/Genius-English-2018-20180503113343-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/509/f06303bea5e0b7e3f30d023ad23d5cac_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/509/f06303bea5e0b7e3f30d023ad23d5cac_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/509/f06303bea5e0b7e3f30d023ad23d5cac_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/509/f06303bea5e0b7e3f30d023ad23d5cac_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/509/f06303bea5e0b7e3f30d023ad23d5cac_320.mp4"
        }
      ]
    },
    {
      "id": "m5dBCY1k",
      "name": "Chandelier",
      "type": "",
      "album": {
        "id": "1152146",
        "name": "Chandelier",
        "url": "https://www.jiosaavn.com/album/chandelier/UiL9E3H6XDc_"
      },
      "year": "2014",
      "releaseDate": "2014-03-17",
      "duration": "216",
      "label": "Monkey Puzzle Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 3998652,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/chandelier/HV0PczdpBlg",
      "copyright": "(P) 2014 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/952/Chandelier-2014-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/952/Chandelier-2014-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/952/Chandelier-2014-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/952/7b60337183c7d47ead728f94ebb113cb_320.mp4"
        }
      ]
    },
    {
      "id": "4RmwbCw4",
      "name": "Cheap Thrills",
      "type": "",
      "album": {
        "id": "1744101",
        "name": "Cheap Thrills",
        "url": "https://www.jiosaavn.com/album/cheap-thrills/d-w-VzXfYCU_"
      },
      "year": "2015",
      "releaseDate": "2015-12-17",
      "duration": "210",
      "label": "Monkey Puzzle Records/RCA Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 97262918,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/cheap-thrills/RDoGRhZzQAc",
      "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_320.mp4"
        }
      ]
    },
    {
      "id": "SxdL_VN6",
      "name": "Dusk Till Dawn (Radio Edit)",
      "type": "",
      "album": {
        "id": "11453840",
        "name": "Dusk Till Dawn (Radio Edit)",
        "url": "https://www.jiosaavn.com/album/dusk-till-dawn-radio-edit/4a-qawJxiqo_"
      },
      "year": "2017",
      "releaseDate": "2017-09-07",
      "duration": "239",
      "label": "RCA Records Label",
      "primaryArtists": "ZAYN",
      "primaryArtistsId": "1881894",
      "featuredArtists": "Sia",
      "featuredArtistsId": "568707",
      "explicitContent": 0,
      "playCount": 49688941,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/dusk-till-dawn-radio-edit/IxAPfStmeQU",
      "copyright": "(P) 2017 RCA Records, a division of Sony Music Entertainment",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/896/Dusk-Till-Dawn-Radio-Edit--English-2017-20170905191749-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/896/Dusk-Till-Dawn-Radio-Edit--English-2017-20170905191749-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/896/Dusk-Till-Dawn-Radio-Edit--English-2017-20170905191749-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/896/ad19c4a75775ccdef32905de23fc10c5_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/896/ad19c4a75775ccdef32905de23fc10c5_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/896/ad19c4a75775ccdef32905de23fc10c5_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/896/ad19c4a75775ccdef32905de23fc10c5_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/896/ad19c4a75775ccdef32905de23fc10c5_320.mp4"
        }
      ]
    },
    {
      "id": "_lX2W2a_",
      "name": "Let&#039;s Love",
      "type": "",
      "album": {
        "id": "22338976",
        "name": "Let&#039;s Love",
        "url": "https://www.jiosaavn.com/album/lets-love/NrF9-Vkuiu4_"
      },
      "year": "2020",
      "releaseDate": "2020-09-11",
      "duration": "200",
      "label": "Parlophone (France)",
      "primaryArtists": "David Guetta, Sia",
      "primaryArtistsId": "568665, 568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 682724,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/lets-love/LwQzAyMCVmw",
      "copyright": "Under Exclusive Licence to Warner Music France, Label Parlophone, ℗ 2020 What A Producer Ltd",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/000/Let-s-Love-English-2020-20200907113205-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/000/779f6ded896bacae3c5fec13c4b8ac02_320.mp4"
        }
      ]
    },
    {
      "id": "t5e4VTsk",
      "name": "Unstoppable",
      "type": "",
      "album": {
        "id": "1759517",
        "name": "Unstoppable",
        "url": "https://www.jiosaavn.com/album/unstoppable/1Tm2aGl16CM_"
      },
      "year": "2016",
      "releaseDate": "2016-01-21",
      "duration": "218",
      "label": "Monkey Puzzle Records/RCA Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 22079909,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/unstoppable/BF0OBSJkRFg",
      "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/552/Unstoppable-English-2016-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/552/26b33054461788c6282e4ac814d3769f_320.mp4"
        }
      ]
    },
    {
      "id": "iquFMDg0",
      "name": "Crying in the Club",
      "type": "",
      "album": {
        "id": "10845250",
        "name": "Crying in the Club",
        "url": "https://www.jiosaavn.com/album/crying-in-the-club/6j0IUL4,nPY_"
      },
      "year": "2017",
      "releaseDate": "2017-05-19",
      "duration": "216",
      "label": "Syco Music/Epic",
      "primaryArtists": "Camila Cabello",
      "primaryArtistsId": "1342580",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 5979934,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/crying-in-the-club/GRkedzl0UAM",
      "copyright": "(P) 2017 Simco Ltd. under exclusive license to Epic Records, a division of Sony Music Entertainment",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/209/Crying-in-the-Club-English-2017-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/209/Crying-in-the-Club-English-2017-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/209/Crying-in-the-Club-English-2017-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/209/6c76948de974d9dddaef8bfca9418148_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/209/6c76948de974d9dddaef8bfca9418148_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/209/6c76948de974d9dddaef8bfca9418148_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/209/6c76948de974d9dddaef8bfca9418148_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/209/6c76948de974d9dddaef8bfca9418148_320.mp4"
        }
      ]
    },
    {
      "id": "vU96z8LR",
      "name": "Floating Through Space",
      "type": "",
      "album": {
        "id": "25126009",
        "name": "Floating Through Space",
        "url": "https://www.jiosaavn.com/album/floating-through-space/tJ88-kjlNk8_"
      },
      "year": "2021",
      "releaseDate": "2021-02-04",
      "duration": "177",
      "label": "Monkey Puzzle/Atlantic",
      "primaryArtists": "Sia, David Guetta",
      "primaryArtistsId": "568707, 568665",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 407356,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/floating-through-space/Bj1SBw4Ie2E",
      "copyright": "under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States., ℗ 2021 Monkey Puzzle Music, Inc.",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/504/Floating-Through-Space-English-2021-20210203054031-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/504/52e5c9b578f86252bc60b36d0f25536f_320.mp4"
        }
      ]
    },
    {
      "id": "n2PC-t5G",
      "name": "Snowman",
      "type": "",
      "album": {
        "id": "16226559",
        "name": "Snowman",
        "url": "https://www.jiosaavn.com/album/snowman/Hv8ASgjBPA4_"
      },
      "year": "2017",
      "releaseDate": "2017-11-11",
      "duration": "165",
      "label": "Monkey Puzzle/Atlantic",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 540438,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/snowman/Hlo7cllEAnQ",
      "copyright": "℗ 2017 Monkey Puzzle Music, Inc., under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States.",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/912/Snowman-English-2017-20221102174604-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/912/579a097a2ab366f62eec9c374de9cf8f_320.mp4"
        }
      ]
    },
    {
      "id": "U2J3f8O9",
      "name": "Unstoppable",
      "type": "",
      "album": {
        "id": "1759503",
        "name": "This Is Acting",
        "url": "https://www.jiosaavn.com/album/this-is-acting/WvjkPt-7qiM_"
      },
      "year": "2016",
      "releaseDate": "2016-01-29",
      "duration": "218",
      "label": "Monkey Puzzle Records/RCA Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 22073044,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/unstoppable/JVohAhIIeAo",
      "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/203/af8d67ab7f66ecc23e6588e080bf2df0_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/203/af8d67ab7f66ecc23e6588e080bf2df0_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/203/af8d67ab7f66ecc23e6588e080bf2df0_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/203/af8d67ab7f66ecc23e6588e080bf2df0_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/203/af8d67ab7f66ecc23e6588e080bf2df0_320.mp4"
        }
      ]
    },
    {
      "id": "hkftnbSX",
      "name": "Dynamite",
      "type": "",
      "album": {
        "id": "30406389",
        "name": "Dynamite",
        "url": "https://www.jiosaavn.com/album/dynamite/wuz-emDEzaQ_"
      },
      "year": "2021",
      "releaseDate": "2021-10-22",
      "duration": "213",
      "label": "Universal-Island Records Ltd.",
      "primaryArtists": "Sean Paul",
      "primaryArtistsId": "468845",
      "featuredArtists": "Sia",
      "featuredArtistsId": "568707",
      "explicitContent": 0,
      "playCount": 146228,
      "language": "english",
      "hasLyrics": "true",
      "url": "https://www.jiosaavn.com/song/dynamite/GAMNRRpSZGs",
      "copyright": "℗ 2021 SPJ Productions Ltd, under exclusive licence to Island Records, a division of Universal Music Operations Limited",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/313/Dynamite-English-2021-20211022063616-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/313/Dynamite-English-2021-20211022063616-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/313/Dynamite-English-2021-20211022063616-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/313/4038614309288f4059582447fc13117f_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/313/4038614309288f4059582447fc13117f_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/313/4038614309288f4059582447fc13117f_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/313/4038614309288f4059582447fc13117f_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/313/4038614309288f4059582447fc13117f_320.mp4"
        }
      ]
    },
    {
      "id": "URuxt8q-",
      "name": "The Greatest",
      "type": "",
      "album": {
        "id": "2786558",
        "name": "This Is Acting (Deluxe Version)",
        "url": "https://www.jiosaavn.com/album/this-is-acting-deluxe-version/vmjUuWv7xeY_"
      },
      "year": "2016",
      "releaseDate": "2016-10-21",
      "duration": "210",
      "label": "Monkey Puzzle Records/RCA Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "Kendrick Lamar",
      "featuredArtistsId": "612060",
      "explicitContent": 0,
      "playCount": 4364221,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/the-greatest/JToeSQAIRh4",
      "copyright": "(P) 2016 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/832/This-Is-Acting-Deluxe-Version-English-2016-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/832/54f46d195029b2756f567bf9976e71dc_320.mp4"
        }
      ]
    },
    {
      "id": "5WXAlMNt",
      "name": "Thunderclouds",
      "type": "",
      "album": {
        "id": "13615087",
        "name": "Thunderclouds",
        "url": "https://www.jiosaavn.com/album/thunderclouds/tq0W-ibW-dg_"
      },
      "year": "2018",
      "releaseDate": "2018-08-09",
      "duration": "187",
      "label": "Records/Columbia",
      "primaryArtists": "Lsd",
      "primaryArtistsId": "1153577",
      "featuredArtists": "Sia, Diplo, Labrinth, Sia, Diplo, And Labrinth",
      "featuredArtistsId": "568707, 599061, 577223, 4799650",
      "explicitContent": 0,
      "playCount": 8828399,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/thunderclouds/RT8zcBh9eUc",
      "copyright": "(P) 2018 RECORDS, LLC / Columbia",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/679/Thunderclouds-English-2018-20180809032729-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/679/b0b7a063d3efddf3a771a0dc91b30d69_320.mp4"
        }
      ]
    },
    {
      "id": "iWt8op78",
      "name": "Cheap Thrills",
      "type": "",
      "album": {
        "id": "1759503",
        "name": "This Is Acting",
        "url": "https://www.jiosaavn.com/album/this-is-acting/WvjkPt-7qiM_"
      },
      "year": "2016",
      "releaseDate": "2016-01-29",
      "duration": "210",
      "label": "Monkey Puzzle Records/RCA Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 97187000,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/cheap-thrills/GT8fCRtAAAs",
      "copyright": "(P) 2015 Monkey Puzzle Records, under exclusive license to RCA Records",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/203/This-Is-Acting-English-2016-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/203/311467c464828dfc1552b27c47c50577_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/203/311467c464828dfc1552b27c47c50577_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/203/311467c464828dfc1552b27c47c50577_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/203/311467c464828dfc1552b27c47c50577_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/203/311467c464828dfc1552b27c47c50577_320.mp4"
        }
      ]
    },
    {
      "id": "wGWwbFVX",
      "name": "Courage to Change",
      "type": "",
      "album": {
        "id": "22703343",
        "name": "Courage to Change",
        "url": "https://www.jiosaavn.com/album/courage-to-change/9ePIgBpmNqo_"
      },
      "year": "2020",
      "releaseDate": "2020-09-24",
      "duration": "292",
      "label": "Atlantic Records",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 155237,
      "language": "english",
      "hasLyrics": "true",
      "url": "https://www.jiosaavn.com/song/courage-to-change/By88RhZ2YWs",
      "copyright": "under exclusive license to Atlantic Recording Corporation for the United States and WEA International for the world outside of the United States., ℗ 2020 Monkey Puzzle Music, Inc.",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/760/Courage-to-Change-English-2020-20210116043159-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/760/a12d5f509af193baee11f859ec61c321_320.mp4"
        }
      ]
    },
    {
      "id": "qnFPUVVn",
      "name": "Never Give Up",
      "type": "",
      "album": {
        "id": "3031864",
        "name": "Never Give Up (From &quot;Lion&quot; Soundtrack)",
        "url": "https://www.jiosaavn.com/album/never-give-up-from-lion-soundtrack/Ls,mAR4z-D4_"
      },
      "year": "2016",
      "releaseDate": "2016-11-18",
      "duration": "222",
      "label": "Masterworks",
      "primaryArtists": "Sia",
      "primaryArtistsId": "568707",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 3575066,
      "language": "english",
      "hasLyrics": "false",
      "url": "https://www.jiosaavn.com/song/never-give-up/AQYtYSFmYV0",
      "copyright": "(P) 2016 Monkey Puzzle Records Inc.",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/659/Never-Give-Up-From-Lion-Soundtrack-English-2016-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/659/490c1c31394d96c9b1c2fd7ace8f54d1_320.mp4"
        }
      ]
    }
  ]
}
```

+++

| Route Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Artist ID     | [!badge variant="primary" text="True"] |
| [!badge variant="contrast" text="id"] | Song ID     | [!badge variant="primary" text="True"] |

| Query Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="language"] | Songs language  | [!badge variant="primary" text="False"] |
