---
order: 100
icon: play
---

# Song Details

## Song details by link

+++ Request

HTTP

```bash
https://saavn.me/songs?link=https://www.jiosaavn.com/song/thunderclouds/RT8zcBh9eUc
```

CURL

```bash
curl -X GET 'https://saavn.me/songs?link=https://www.jiosaavn.com/song/thunderclouds/RT8zcBh9eUc' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": [
    {
      "id": "5WXAlMNt",
      "name": "Thunderclouds",
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
      "playCount": 8822136,
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
    }
  ]
}
```

+++

| Query Paramter                                | Description                           | Required                               |
| --------------------------------------- | ------------------------------------- | -------------------------------------- |
| [!badge variant="contrast" text="link"] | Song link from <https://jiosaavn.com> | [!badge variant="primary" text="True"] |

## Song details by song ID

+++ Request

HTTP

```bash
https://saavn.me/songs?id=5WXAlMNt
```

CURL

```bash
curl -X GET 'https://saavn.me/songs?id=5WXAlMNt' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": [
    {
      "id": "5WXAlMNt",
      "name": "Thunderclouds",
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
      "playCount": 8822136,
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
    }
  ]
}
```

+++

### Multiple IDs

You can also pass multiple comma seperated song IDs in a single request.

+++ Request

```bash
https://saavn.me/songs?id=5WXAlMNt,csaEsVWV

```

CURL

```bash
curl -X GET 'https://saavn.me/songs?id=5WXAlMNt,csaEsVWV
' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": [
    {
      "id": "5WXAlMNt",
      "name": "Thunderclouds",
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
      "playCount": 8822131,
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
      "id": "csaEsVWV",
      "name": "Kun Faaya Kun",
      "album": {
        "id": "1045274",
        "name": "Rockstar",
        "url": "https://www.jiosaavn.com/album/rockstar/C3Br8V0qKrc_"
      },
      "year": "2011",
      "releaseDate": "2011-09-30",
      "duration": "473",
      "label": "",
      "primaryArtists": "A.R. Rahman, Javed Ali, Mohit Chauhan",
      "primaryArtistsId": "456269, 455926, 455124",
      "featuredArtists": "",
      "featuredArtistsId": "",
      "explicitContent": 0,
      "playCount": 28935970,
      "language": "hindi",
      "hasLyrics": "true",
      "url": "https://www.jiosaavn.com/song/kun-faaya-kun/ExsKdAdmYGU",
      "copyright": "©  2011 ",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/274/Rockstar-2011-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/274/Rockstar-2011-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/274/Rockstar-2011-500x500.jpg"
        }
      ],
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_320.mp4"
        }
      ]
    }
  ]
}
```

+++

| Query Paramter                              | Description | Required                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Song ID     | [!badge variant="primary" text="True"] |
