# :musical_note: JioSaavn API [UNOFFICIAL]

---

#### This is an Unofficial API for JioSaavn. You can download songs using this API in 320kbps quality (mp3/mp4)

---

## ✨ Features

:notes: **Highest Quality Songs :** Download songs from Jiosaavn.com in highest quality. Highest available on JioSaavn is 320kbps

:lock: **Rotating User-Agents :** Inbuilt rotating User Agents to avoid detection

:headphones: **Support for streamable links :** Provides streamable links along with download links for all songs.

:sunrise: **Highest quality song thumbnail :** API provides the  song thumbnail in maximum resolution.

:rocket: **Fallback system :** If a mp3 version of the requested song is not available, the API automatically falls back to mp4 version.

---

## Available song details

Currently the API can fetch these details for a specific song in JSON format : 

1. Song ID
2. Song Name
3. Song link (JioSaavn link)
4. Song Thumbnail
5. Song Play Count
6. Album ID
7. Album link (JioSaavn link)
8. Artist Name
9. Year of Release
10. Duration of Song
11. Language
12. Label Name
13. Preview Link (30 sec preview of original song)
14. Streaming Link
15. Download link

---

## :label: Description

**Base URL :** https://saavn.sumit.codes/

This API currently supports these routes :

1. **`/songs/`** - Directly get details/download links for songs by their Jiosaavn links.

2. **`/search/`** - Search for songs by Song name/Song name + artist name

3. **`/fastsearch/`** - Similar to `/search/` but much faster and **DOES NOT** provides download/streamable links. Use this if you just want Song info. 

---

## :mag: Usage

#### Make a `GET`request to the required API endpoint to get the corresponding results in JSON format



---

### 1. `/songs/`

**Example:** `https://saavn.sumit.codes/songs/https://www.jiosaavn.com/songs/demons/Qw9edk1hY0Y`

#### Response

```JSON
{
  "result": [
    {
      "song_id": "3g5G9QTu",
      "song_title": "Demons",
      "song_url": "https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y",
      "song_image": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
      "song_play_count": 11867255,
      "album_id": "1142502",
      "album_title": "Night Visions",
      "album_url": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
      "artist_name": "Imagine Dragons",
      "year": "2013",
      "duration": "175",
      "language": "english",
      "label": "Kid Ina Korner / Interscope",
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjBaR231YewUnWfxJpTqCuS3Chy+zqaoKB7kn8aJ0n4ox+kfV6Pm48hw7tS9a8Gtq",
      "preview_url": "https://preview.saavncdn.com/210/6878daf1737dcbd57b99677f085952d1_96_p.mp4",
      "stream_link": "https://ac.cf.saavncdn.com/210/6878daf1737dcbd57b99677f085952d1_320.mp4?Expires=1595426237&Signature=Pk-WkQKaXEhZ7flNKjtuUQobK19MitXPYZ3-bmo3BhddHxXgnPmYqaZGBOIPiGuT2rsKBwQ~pYAzf3XNv5jhZicFO4uGEjSKYd58sFAEFCZeOx6hyvbOd4KfRfna2t3kTJqVlYTGty-VPvzdVpseVaQB~SRQ26O0t~OzAd4Jig-Oho~TXxnYdzW4TGLsG3UNDwuyG6GS7FZt~-c1W74VsWLMcbM1CbxDycgmabRKN0sq0xGDjiy1LnBIUDG1Ty0dPbaj9LYI8X0fpmT8zrE7W6QUB58j3RaKJDEdf34JNW-1X0Ejg-OojRge1fO5UREbhOT2yikFd8kvmgxk-4M8kA__&Key-Pair-Id=APKAJB334VX63D3WJ5ZQ",
      "download_link": "https://h.saavncdn.com/210/6878daf1737dcbd57b99677f085952d1_320.mp3"
    }
  ]
}
```

### 2. `/search/`

**Example:** `https://saavn.sumit.codes/search/demons`

#### Response

```JSON
{
  "result": [
    {
      "song_id": "FUi8QiVK",
      "song_title": "Demons",
      "song_url": "https://www.jiosaavn.com/s/song/english/AudioHex:-Bad-Blood-Saga/Demons/Nj0CCSVZYXg",
      "song_image": "https://c.saavncdn.com/296/AudioHex-Bad-Blood-Saga-English-2018-20180511141817-500x500.jpg",
      "song_play_count": "2",
      "album_id": "12953363",
      "album_title": "AudioHex: Bad Blood Saga",
      "album_url": "https://www.jiosaavn.com/s/album/english/audiohex:-bad-blood-saga-2018/UXO7x6-fzzk_",
      "artist_name": "Erzulie",
      "year": "2018",
      "duration": "336",
      "language": "english",
      "label": "Erzulie",
      "encrypted_media_url": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4LCfMAA8EbMS69tFi1oiw04CITGMclEBMOTIQLhn7kIvq+Raxb3lC34PzFaL/aK97",
      "preview_url": "http://preview.saavncdn.com/296/a539587322bf691af9bcfc53e74bda9b_96_p.mp4",
      "stream_link": "https://ac.cf.saavncdn.com/296/a539587322bf691af9bcfc53e74bda9b_320.mp4?Expires=1595426317&Signature=IB~B055IG8UeGAlsmUy6OpqpizE5yM-yVUNKtcUDXy~DBN8umd1xOxoJFVn0Sf-QvGWDgyod8T9UkoYWx4h3H7xG4F0J0yswSWqmwSYFiqetJIyXmx8AAvttUXOa~G6M4j7e4qzNY-DOakgoCa8~SU5RKnjScrZF~1j7Tw0UMe-tMZ4V~MQ6s3MwUGRhqT66s~~ssqrmcaMIQk3WArLtsV6Klkx11Obj4D~lHvbP~hk3YgHup52mL1tZlqSdWmml8hCtXZnrYo-6oSjuhUjRWzLLK3bAhjdHnnn-YijoQ64JknNCztik6~eFtPehCfqIpYyReBik9Ro2jjQb0WhsNA__&Key-Pair-Id=APKAJB334VX63D3WJ5ZQ",
      "download_link": "https://h.saavncdn.com/296/a539587322bf691af9bcfc53e74bda9b_320.mp3"
    },
    {
      "song_id": "GF0baJAJ",
      "song_title": "Demons",
      "song_url": "https://www.jiosaavn.com/s/song/english/Someday-Rumble-Sampler/Demons/Ny5bUxV6dnk",
      "song_image": "https://c.saavncdn.com/766/Someday-Rumble-Sampler-English-2018-20180503170014-500x500.jpg",
      "song_play_count": "",
      "album_id": "12829792",
      "album_title": "Someday Rumble Sampler",
      "album_url": "https://www.jiosaavn.com/s/album/english/someday-rumble-sampler-2018/VXrg-AmzSyc_",
      "artist_name": "Someday Rumble",
      "year": "2018",
      "duration": "207",
      "language": "english",
      "label": "RiverTown Records",
      "encrypted_media_url": "iPPGVzyogeiPwpro65A0eUaQggN+8+J434YuaUSJ5kRVC8RFVx0rbwBo38imLnOXNQJmg+/G39UEXcqySyHoyoPzFaL/aK97",
      "preview_url": "http://preview.saavncdn.com/766/760f42c8b7e0a9c023bd46bc60b02610_96_p.mp4",
      "stream_link": "https://ac.cf.saavncdn.com/766/760f42c8b7e0a9c023bd46bc60b02610_320.mp4?Expires=1595426320&Signature=fK33~7QpI8LkVcbBcoNV467HnLqNRk-JpFJHBhcZHQKAQ~pMZVdB7mI4Qkv1aDYn~JFy44cP~u6phnqlx6EtNsYLA6NfPT63nbjMmFfXcNkmVGzAntV9Pf6c3SeRvD2aNEnf0-rpBOoYnWn21Si4cqu90nxaBKEgGjvmzv9zNbGIiNMFHLiAl5wDcUO6Nku9O~3gvH3lwqqFM10ho3f4Cpl81MQcgEwkKw1huKNa9IFnptXqmT~vnoZ0fFtbWYzpH23j5xltEZEPKh2gsKnudLZHRY2Y3YeXdFbg3luu9iVbZWt6kZ~iTGYKsJj-DhbMLBnFIuTqHHXQ5MvyUcT2Qg__&Key-Pair-Id=APKAJB334VX63D3WJ5ZQ",
      "download_link": "https://h.saavncdn.com/766/760f42c8b7e0a9c023bd46bc60b02610_320.mp3"
    },
  ]
}
```

### 3. `/fastsearch/`

**Example:** `https://saavn.sumit.codes/fastsearch/demons`

#### Response

```JSON
{
  "result": [
    {
      "song_id": "FUi8QiVK",
      "song_title": "Demons",
      "song_url": "https://www.jiosaavn.com/s/song/english/AudioHex:-Bad-Blood-Saga/Demons/Nj0CCSVZYXg",
      "song_image": "https://c.saavncdn.com/296/AudioHex-Bad-Blood-Saga-English-2018-20180511141817-500x500.jpg",
      "song_play_count": "2",
      "album_id": "12953363",
      "album_title": "AudioHex: Bad Blood Saga",
      "album_url": "https://www.jiosaavn.com/s/album/english/audiohex:-bad-blood-saga-2018/UXO7x6-fzzk_",
      "artist_name": "Erzulie",
      "year": "2018",
      "duration": "336",
      "language": "english",
      "label": "Erzulie",
      "encrypted_media_url": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4LCfMAA8EbMS69tFi1oiw04CITGMclEBMOTIQLhn7kIvq+Raxb3lC34PzFaL/aK97",
      "preview_url": "http://preview.saavncdn.com/296/a539587322bf691af9bcfc53e74bda9b_96_p.mp4",

    },
    {
      "song_id": "haRdc2jk",
      "song_title": "Demons (Remix)",
      "song_url": "https://www.jiosaavn.com/s/song/english/Top-50-Pop-Hits!-Best-of-2013-+-2014-Deluxe-Edition/Demons-Remix/GAk5VRcCXVg",
      "song_image": "https://c.saavncdn.com/695/Top-50-Pop-Hits-Best-of-2013-2014-Deluxe-Edition-English-2014-500x500.jpg",
      "song_play_count": "3",
      "album_id": "1259784",
      "album_title": "Top 50 Pop Hits! Best of 2013 + 2014 (Deluxe Edition)",
      "album_url": "https://www.jiosaavn.com/s/album/english/top-50-pop-hits!-best-of-2013-+-2014-deluxe-edition-2014/DpCXurqldeM_",
      "artist_name": "Ultimate Pop Hits! Factory",
      "year": "2014",
      "duration": "266",
      "language": "english",
      "label": "Ultimate Pop Hits! Factory",
    }
  ]
}
```

---

## :construction_worker: Project Setup

#### Clone the Repo 

```
$ git clone https://github.com/sumitkolhe/jiosaavn-api
```
```
$ cd jiosaavn-api
```

#### Install dependencies


```
$ npm install
```

#### Run the API


```
$ npm run dev
```

---
## ✍️ Authors

- [**Sumit Kolhe**](https://github.com/sumitkolhe) - _Author_

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

---