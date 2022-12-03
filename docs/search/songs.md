---
order: 800
icon: play
---

# Search Songs

Search songs by query -

+++ Request

HTTP

```bash
https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2
```

CURL

```bash
curl -X GET 'https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 44,
    "start": 1,
    "results": [
      {
        "id": "csaEsVWV",
        "name": "Kun Faaya Kun",
        "album": {
          "id": "1045274",
          "name": "Rockstar",
          "url": "https://www.jiosaavn.com/album/rockstar/C3Br8V0qKrc_"
        },
        "year": "2011",
        "releaseDate": null,
        "duration": "473",
        "label": "",
        "primaryArtists": "A.R. Rahman, Javed Ali, Mohit Chauhan",
        "primaryArtistsId": "456269, 455926, 455124",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": "28936076",
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
      },
      {
        "id": "2cIECjVI",
        "name": "Kun Faya Kun",
        "album": {
          "id": "38049495",
          "name": "Kun Faya Kun",
          "url": "https://www.jiosaavn.com/album/kun-faya-kun/2U5-j2,S0vQ_"
        },
        "year": "2022",
        "releaseDate": null,
        "duration": "180",
        "label": "Arnob Khan Akib",
        "primaryArtists": "Arnob Khan Akib",
        "primaryArtistsId": "9601972",
        "featuredArtists": "",
        "featuredArtistsId": "",
        "explicitContent": 0,
        "playCount": "20107",
        "language": "hindi",
        "hasLyrics": "false",
        "url": "https://www.jiosaavn.com/song/kun-faya-kun/QgsidDdaYXo",
        "copyright": "(P) 2022 Arnob Khan Akib",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/205/Kun-Faya-Kun-Hindi-2022-20220908185040-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/205/Kun-Faya-Kun-Hindi-2022-20220908185040-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/205/Kun-Faya-Kun-Hindi-2022-20220908185040-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "link": "https://aac.saavncdn.com/205/fa934b91b1450d2cf3a7f02942b00722_12.mp4"
          },
          {
            "quality": "48kbps",
            "link": "https://aac.saavncdn.com/205/fa934b91b1450d2cf3a7f02942b00722_48.mp4"
          },
          {
            "quality": "96kbps",
            "link": "https://aac.saavncdn.com/205/fa934b91b1450d2cf3a7f02942b00722_96.mp4"
          },
          {
            "quality": "160kbps",
            "link": "https://aac.saavncdn.com/205/fa934b91b1450d2cf3a7f02942b00722_160.mp4"
          },
          {
            "quality": "320kbps",
            "link": "https://aac.saavncdn.com/205/fa934b91b1450d2cf3a7f02942b00722_320.mp4"
          }
        ]
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
