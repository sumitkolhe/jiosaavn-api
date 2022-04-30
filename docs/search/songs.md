---
order: 10
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
  "results": [
    {
      "id": "KZQrG9X_",
      "name": "Kun faya Kun (Lofi)",
      "album": {
        "id": "31187974",
        "name": "Kun faya Kun (Lofi)",
        "url": "https://www.jiosaavn.com/album/kun-faya-kun-lofi/Otc2uSJ04p8_"
      },
      "year": "2021",
      "releaseDate": null,
      "duration": "185",
      "label": "Sufi Stream",
      "primaryArtists": "Ahemad Razvi",
      "primaryArtistsId": "11294502",
      "explicitContent": 0,
      "playCount": "28753",
      "language": "hindi",
      "hasLyrics": "false",
      "artist": "Ahemad Razvi",
      "image": [
        {
          "quality": "50x50",
          "link": "https://c.saavncdn.com/532/Kun-faya-Kun-Lofi--Hindi-2021-20220216220938-50x50.jpg"
        },
        {
          "quality": "150x150",
          "link": "https://c.saavncdn.com/532/Kun-faya-Kun-Lofi--Hindi-2021-20220216220938-150x150.jpg"
        },
        {
          "quality": "500x500",
          "link": "https://c.saavncdn.com/532/Kun-faya-Kun-Lofi--Hindi-2021-20220216220938-500x500.jpg"
        }
      ],
      "url": "https://www.jiosaavn.com/song/kun-faya-kun-lofi/OzI6QzMJb2w",
      "copyright": "℗ 2021 Sufi Stream",
      "downloadUrl": [
        {
          "quality": "12kbps",
          "link": "https://aac.saavncdn.com/532/2037b2e3f9df2f33b6237b92bfe66cec_12.mp4"
        },
        {
          "quality": "48kbps",
          "link": "https://aac.saavncdn.com/532/2037b2e3f9df2f33b6237b92bfe66cec_48.mp4"
        },
        {
          "quality": "96kbps",
          "link": "https://aac.saavncdn.com/532/2037b2e3f9df2f33b6237b92bfe66cec_96.mp4"
        },
        {
          "quality": "160kbps",
          "link": "https://aac.saavncdn.com/532/2037b2e3f9df2f33b6237b92bfe66cec_160.mp4"
        },
        {
          "quality": "320kbps",
          "link": "https://aac.saavncdn.com/532/2037b2e3f9df2f33b6237b92bfe66cec_320.mp4"
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
      "releaseDate": null,
      "duration": "473",
      "label": "",
      "primaryArtists": "A.R. Rahman, Javed Ali, Mohit Chauhan",
      "primaryArtistsId": "456269, 455926, 455124",
      "explicitContent": 0,
      "playCount": "26100974",
      "language": "hindi",
      "hasLyrics": "true",
      "artist": "A.R. Rahman, Javed Ali, Mohit Chauhan",
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
      "url": "https://www.jiosaavn.com/song/kun-faaya-kun/ExsKdAdmYGU",
      "copyright": "©  2011 ",
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

| Paramter                                 | Description             | Default | Required                                |
| ---------------------------------------- | ----------------------- | ------- | --------------------------------------- |
| [!badge variant="contrast" text="page"]  | Current page            | 1       | [!badge variant="primary" text="False"] |
| [!badge variant="contrast" text="limit"] | limit number of results | 20      | [!badge variant="primary" text="False"] |
