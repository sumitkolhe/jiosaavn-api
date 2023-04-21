---
order: 700
icon: log
---

# Search Playlists

Search artists by query.

+++ Request

HTTP

```bash
https://saavn.me/search/playlists?query=sia
```

CURL

```bash
curl -X GET 'https://saavn.me/search/playlists?query=sia' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 3,
    "start": 1,
    "results": [
      {
        "id": "79579889",
        "userId": "phulki_user",
        "name": "Lets Play - Sia",
        "songCount": "30",
        "username": "Phulki_user",
        "firstname": "Saavn",
        "lastname": "Editor",
        "language": "english",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/SiaTheGreatest_20201215042804_50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/SiaTheGreatest_20201215042804_150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/SiaTheGreatest_20201215042804_500x500.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/lets-play---sia/ZFD-DFK14YY_",
        "songs": []
      },
      {
        "id": "775961417",
        "userId": "phulki_user",
        "name": "Sia - English - JioTunes",
        "songCount": "15",
        "username": "Phulki_user",
        "firstname": "Saavn",
        "lastname": "Editor",
        "language": "english",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/JioTunesSiaEnglish_20200331182103_50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/JioTunesSiaEnglish_20200331182103_150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/JioTunesSiaEnglish_20200331182103_500x500.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/sia---english---jiotunes/DSs9n1qNxIdieSJqt9HmOQ__",
        "songs": []
      },
      {
        "id": "148359715",
        "userId": "phulki_user",
        "name": "Sia - Spotlight",
        "songCount": "25",
        "username": "Phulki_user",
        "firstname": "Saavn",
        "lastname": "Editor",
        "language": "english",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/spotlight-148359715_20220629120541_50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/spotlight-148359715_20220629120541_150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/spotlight-148359715_20220629120541_500x500.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/sia---spotlight/d7YEuKUbtAHuCJW60TJk1Q__",
        "songs": []
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
