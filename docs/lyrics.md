---
order: 1
icon: note
---

# Lyrics

## Song lyrics by song ID

> Lyrics are only available for a limited set of songs.

+++ Request

HTTP

```bash
https://saavn.me/lyrics?id=mPTrDSun
```

CURL

```bash
curl -X GET 'https://saavn.me/lyrics?id=mPTrDSun' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "lyrics": "Teri-meri galaan ho gayi mashahoor Kar na kabhi tu mujhe nazron se door Kitthe challie? Tu kitthe challie? Tu kitthe challie? (kitthe challie?)  Jaanda ae dil, ye to jaandi ae tu Tere bina main na rahoon, mere bina tu Kitthe challie? Tu kitthe challie? Tu kitthe challie? (kitthe challie)  Kaatoon kaise raataan, o, saanware? Jeeya nahin jaata, sun baavre  Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re  Cham-cham-cham ambraan de taare kahinde ne, sajjna Tu hi chann mere is dil da, mann lai ve, sajjna Tere bina mera hove na guzaara Chadd ke na jaavin mainu, tu hi hai sahaara  Kaatoon kaise raataan, o, saanware? Jeeya nahin jaata, sun baavre  Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re  Teri-meri galaan ho gayi mashahoor Kar na kabhi tu mainu nazron se door Picche challie, tere picche challie, tere picche challie  Jaanda ae dil, ye to jaandi ae tu Tere bina main na rahoon, mere bina tu Kitthe challie? Tu kitthe challie? Tu kitthe challie? (kitthe challie?)  Kaatoon kaise raataan, o, saanware? Jeeya nahin jaata, sun baavre  Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re  Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re Ki raataan lambiaan-lambiaan re Katein tere sangi aan, sangi aa re",
    "snippet": "Ki raataan lambiaan-lambiaan re",
    "copyright": "Writer(s): Tanishk Baagchi Daas, Renuka Panwar<br>Lyrics powered by www.musixmatch.com"
  }
}
```

+++

| Query Paramter                                | Description                           | Required                               |
| --------------------------------------- | ------------------------------------- | -------------------------------------- |
| [!badge variant="contrast" text="id"] | Song ID | [!badge variant="primary" text="True"] |
