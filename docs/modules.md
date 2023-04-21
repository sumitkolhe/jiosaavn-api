---
order: 1000
icon: package
---

# Homepage Data

## Get homepage modules

Get launch data from <https://jiosaavn.com> homepage for different modules such as `songs`, `albums`, `trending`, `charts`, `playlists`, etc.

+++ Request

HTTP

```bash
https://saavn.me/modules?language=hindi,english
```

CURL

```bash
curl -X GET 'https://saavn.me/modules?language=hindi,english' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "albums": [
      {
        "id": "40359250",
        "name": "An Action Hero",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/an-action-hero/e4fCAtaujdE_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "455494",
            "name": "Various Artists",
            "url": "https://www.jiosaavn.com/artist/various-artists-/ztKx8IUBme8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "455494",
            "name": "Various Artists",
            "url": "https://www.jiosaavn.com/artist/various-artists-/ztKx8IUBme8_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/811/An-Action-Hero-Hindi-2022-20221203121025-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/811/An-Action-Hero-Hindi-2022-20221203121025-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/811/An-Action-Hero-Hindi-2022-20221203121025-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "1098331345",
        "name": "Govinda Naam Mera",
        "year": "",
        "type": "playlist",
        "playCount": "",
        "language": "",
        "explicitContent": "0",
        "songCount": "2",
        "url": "https://www.jiosaavn.com/featured/govinda-naam-mera/MX4q3qxGl2yP3AiNrzXpzA__",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/GovindaNaamMera_20221202051456.jpg?bch=1669959945"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/GovindaNaamMera_20221202051456.jpg?bch=1669959945"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/GovindaNaamMera_20221202051456.jpg?bch=1669959945"
          }
        ],
        "songs": []
      },
      {
        "id": "38682222",
        "name": "Bhediya",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/bhediya/wSM2AOubajk_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "461968",
            "name": "Sachin-Jigar",
            "url": "https://www.jiosaavn.com/artist/sachin-jigar-/JO1Nx088Pfo_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "6565182",
            "name": "K4 Kekho",
            "url": "https://www.jiosaavn.com/artist/k4-kekho-/ok,PYU,LV0I_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "40204452",
        "name": "Salaam Venky",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/salaam-venky/SkwZPTcHJo4_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "702592",
            "name": "Mithoon",
            "url": "https://www.jiosaavn.com/artist/mithoon-/nQKQiNRsTKs_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/958/Salaam-Venky-Hindi-2022-20221130114948-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/958/Salaam-Venky-Hindi-2022-20221130114948-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/958/Salaam-Venky-Hindi-2022-20221130114948-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "40036418",
        "name": "Drishyam 2",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/drishyam-2/ZZ7UZbObNQw_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "458681",
            "name": "Amitabh Bhattacharya",
            "url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-/hsNRL6ZmJmo_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "455170",
            "name": "Devi Sri Prasad",
            "url": "https://www.jiosaavn.com/artist/devi-sri-prasad-/M0dlT,PMjDs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "455170",
            "name": "Devi Sri Prasad",
            "url": "https://www.jiosaavn.com/artist/devi-sri-prasad-/M0dlT,PMjDs_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "458681",
            "name": "Amitabh Bhattacharya",
            "url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-/hsNRL6ZmJmo_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/555/Drishyam-2-Hindi-2022-20221117165824-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/555/Drishyam-2-Hindi-2022-20221117165824-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/555/Drishyam-2-Hindi-2022-20221117165824-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "40107876",
        "name": "Mister Mummy",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/mister-mummy/8,daRM8MTGg_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "489732",
            "name": "Rochak Kohli",
            "url": "https://www.jiosaavn.com/artist/rochak-kohli-/eegLtbffmDE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "455618",
            "name": "Ghulam Ali",
            "url": "https://www.jiosaavn.com/artist/ghulam-ali-/hFZSvaKsWNI_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "464289",
            "name": "Sneha Khanwalkar",
            "url": "https://www.jiosaavn.com/artist/sneha-khanwalkar-/0wTvLAtFUXk_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "489732",
            "name": "Rochak Kohli",
            "url": "https://www.jiosaavn.com/artist/rochak-kohli-/eegLtbffmDE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "455618",
            "name": "Ghulam Ali",
            "url": "https://www.jiosaavn.com/artist/ghulam-ali-/hFZSvaKsWNI_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "464289",
            "name": "Sneha Khanwalkar",
            "url": "https://www.jiosaavn.com/artist/sneha-khanwalkar-/0wTvLAtFUXk_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/804/Mister-Mummy-Hindi-2022-20221119191107-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/804/Mister-Mummy-Hindi-2022-20221119191107-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/804/Mister-Mummy-Hindi-2022-20221119191107-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39987208",
        "name": "Lakeerein (From \"Lakiro\")",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/lakeerein-from-lakiro/KZnCWGdveCY_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "677374",
            "name": "Parth Bharat Thakkar",
            "url": "https://www.jiosaavn.com/artist/parth-bharat-thakkar-/BCL8QKrESU0_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "457422",
            "name": "Amit Trivedi",
            "url": "https://www.jiosaavn.com/artist/amit-trivedi-/BxN3kFKSp1o_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/767/Lakeerein-From-Lakiro-Hindi-2022-20221203225040-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/767/Lakeerein-From-Lakiro-Hindi-2022-20221203225040-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/767/Lakeerein-From-Lakiro-Hindi-2022-20221203225040-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "40205154",
        "name": "Qala (Music From The Netflix Film)",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/qala-music-from-the-netflix-film/V-q6yZhhS4k_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "457422",
            "name": "Amit Trivedi",
            "url": "https://www.jiosaavn.com/artist/amit-trivedi-/BxN3kFKSp1o_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "464291",
            "name": "Sagar Desai",
            "url": "https://www.jiosaavn.com/artist/sagar-desai-/4-Vs0vIppkc_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/440/Qala-Music-From-The-Netflix-Film-Hindi-2022-20221123170049-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/440/Qala-Music-From-The-Netflix-Film-Hindi-2022-20221123170049-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/440/Qala-Music-From-The-Netflix-Film-Hindi-2022-20221123170049-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39430420",
        "name": "Butterfly Titliyan (Original Motion Soundtrack Badass Ravikumar)",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/butterfly-titliyan-original-motion-soundtrack-badass-ravikumar/e7pfGBZevlc_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "455132",
            "name": "Himesh Reshammiya",
            "url": "https://www.jiosaavn.com/artist/himesh-reshammiya-/N,m6H0-rqiY_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/543/Butterfly-Titliyan-Original-Motion-Soundtrack-Badass-Ravikumar-Hindi-2022-20221027133112-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/543/Butterfly-Titliyan-Original-Motion-Soundtrack-Badass-Ravikumar-Hindi-2022-20221027133112-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/543/Butterfly-Titliyan-Original-Motion-Soundtrack-Badass-Ravikumar-Hindi-2022-20221027133112-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39034907",
        "name": "Phone Bhoot",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/phone-bhoot/5CbBXDvUEkE_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "1595701",
            "name": "Tanishk Bagchi",
            "url": "https://www.jiosaavn.com/artist/tanishk-bagchi-/Y-5m-phldpg_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/844/Phone-Bhoot-Hindi-2022-20221018181350-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/844/Phone-Bhoot-Hindi-2022-20221018181350-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/844/Phone-Bhoot-Hindi-2022-20221018181350-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "38326572",
        "name": "Rocket Gang",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/rocket-gang/q6fYOF,fL60_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "457422",
            "name": "Amit Trivedi",
            "url": "https://www.jiosaavn.com/artist/amit-trivedi-/BxN3kFKSp1o_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/300/Rocket-Gang-Hindi-2022-20221117105322-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/300/Rocket-Gang-Hindi-2022-20221117105322-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/300/Rocket-Gang-Hindi-2022-20221117105322-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "40100426",
        "name": "Sasanasabha (Hindi)",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/sasanasabha-hindi/8Hypzf8iWFY_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "697634",
            "name": "Ravi Basrur",
            "url": "https://www.jiosaavn.com/artist/ravi-basrur-/ptQxxcqIDBg_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/000/Sasanasabha-Hindi-Hindi-2022-20221121101339-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/000/Sasanasabha-Hindi-Hindi-2022-20221121101339-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/000/Sasanasabha-Hindi-Hindi-2022-20221121101339-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39303412",
        "name": "Mili",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/mili/vXQ4hdQbLrw_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "456269",
            "name": "A.R. Rahman",
            "url": "https://www.jiosaavn.com/artist/a.r.-rahman-/HhFyPLvlKN0_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/885/Mili-Hindi-2022-20221107182816-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/885/Mili-Hindi-2022-20221107182816-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/885/Mili-Hindi-2022-20221107182816-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39664181",
        "name": "Monica, O My Darling (Music from the Netflix Film)",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/monica-o-my-darling-music-from-the-netflix-film/r57-XkMns-k_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "5027335",
            "name": "Achint",
            "url": "https://www.jiosaavn.com/artist/achint-/0EpuqFcYpTw_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/970/Monica-O-My-Darling-Music-from-the-Netflix-Film-Hindi-2022-20221107133806-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/970/Monica-O-My-Darling-Music-from-the-Netflix-Film-Hindi-2022-20221107133806-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/970/Monica-O-My-Darling-Music-from-the-Netflix-Film-Hindi-2022-20221107133806-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39298602",
        "name": "Uunchai",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/uunchai/R1CLpZJnrUk_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "457422",
            "name": "Amit Trivedi",
            "url": "https://www.jiosaavn.com/artist/amit-trivedi-/BxN3kFKSp1o_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/884/Uunchai-Hindi-2022-20221028114008-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/884/Uunchai-Hindi-2022-20221028114008-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/884/Uunchai-Hindi-2022-20221028114008-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39558495",
        "name": "Double Xl",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/double-xl/aN4LNJ-UPz0_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "465068",
            "name": "Sohail Sen",
            "url": "https://www.jiosaavn.com/artist/sohail-sen-/rzD0cfGb4oE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "481676",
            "name": "Kanishk Seth",
            "url": "https://www.jiosaavn.com/artist/kanishk-seth-/bu7kc6EBcMI_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "465068",
            "name": "Sohail Sen",
            "url": "https://www.jiosaavn.com/artist/sohail-sen-/rzD0cfGb4oE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "481676",
            "name": "Kanishk Seth",
            "url": "https://www.jiosaavn.com/artist/kanishk-seth-/bu7kc6EBcMI_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/781/Double-Xl-Hindi-2022-20221101191003-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/781/Double-Xl-Hindi-2022-20221101191003-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/781/Double-Xl-Hindi-2022-20221101191003-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39661317",
        "name": "Tara Vs Bilal",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/tara-vs-bilal/rfcCPLglk6o_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "746774",
            "name": "Manan Bhardwaj",
            "url": "https://www.jiosaavn.com/artist/manan-bhardwaj-/PHyqUR9DoKY_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "746774",
            "name": "Manan Bhardwaj",
            "url": "https://www.jiosaavn.com/artist/manan-bhardwaj-/PHyqUR9DoKY_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/774/Tara-Vs-Bilal-Hindi-2022-20221104171027-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/774/Tara-Vs-Bilal-Hindi-2022-20221104171027-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/774/Tara-Vs-Bilal-Hindi-2022-20221104171027-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39960118",
        "name": "India Lockdown",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/india-lockdown/Jyia4XVplEs_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "465906",
            "name": "Rohit Kulkarni",
            "url": "https://www.jiosaavn.com/artist/rohit-kulkarni-/KNAN4n1qaJ8_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "14611752",
            "name": "Imli Adraki",
            "url": "https://www.jiosaavn.com/artist/imli-adraki-/D30ud22Tw-U_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/961/India-Lockdown-Hindi-2022-20221115123759-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/961/India-Lockdown-Hindi-2022-20221115123759-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/961/India-Lockdown-Hindi-2022-20221115123759-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39286927",
        "name": "Thank God",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/thank-god/IC1wRtVsUI0_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "1595701",
            "name": "Tanishk Bagchi",
            "url": "https://www.jiosaavn.com/artist/tanishk-bagchi-/Y-5m-phldpg_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "8649429",
            "name": "Chamath Sangeeth",
            "url": "https://www.jiosaavn.com/artist/chamath-sangeeth-/E5uH0RWng6E_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "489732",
            "name": "Rochak Kohli",
            "url": "https://www.jiosaavn.com/artist/rochak-kohli-/eegLtbffmDE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "711605",
            "name": "Anand Raaj Anand",
            "url": "https://www.jiosaavn.com/artist/anand-raaj-anand-/OLdQ1N8XxPI_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "1595701",
            "name": "Tanishk Bagchi",
            "url": "https://www.jiosaavn.com/artist/tanishk-bagchi-/Y-5m-phldpg_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "8649429",
            "name": "Chamath Sangeeth",
            "url": "https://www.jiosaavn.com/artist/chamath-sangeeth-/E5uH0RWng6E_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "489732",
            "name": "Rochak Kohli",
            "url": "https://www.jiosaavn.com/artist/rochak-kohli-/eegLtbffmDE_",
            "image": false,
            "type": "artist",
            "role": "music"
          },
          {
            "id": "711605",
            "name": "Anand Raaj Anand",
            "url": "https://www.jiosaavn.com/artist/anand-raaj-anand-/OLdQ1N8XxPI_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/712/Thank-God-Hindi-2022-20221022001002-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/712/Thank-God-Hindi-2022-20221022001002-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/712/Thank-God-Hindi-2022-20221022001002-500x500.jpg"
          }
        ],
        "songs": []
      },
      {
        "id": "39621698",
        "name": "Kantara  - Hindi",
        "year": "",
        "type": "album",
        "playCount": "",
        "language": "hindi",
        "explicitContent": "0",
        "songCount": "0",
        "url": "https://www.jiosaavn.com/album/kantara----hindi/aP7r9eAx0DE_",
        "primaryArtists": [],
        "featuredArtists": [],
        "artists": [
          {
            "id": "788747",
            "name": "B. Ajaneesh Loknath",
            "url": "https://www.jiosaavn.com/artist/b.-ajaneesh-loknath-/YV,D3vgTJ3M_",
            "image": false,
            "type": "artist",
            "role": "music"
          }
        ],
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/970/Kantara-Hindi-Hindi-2022-20221104132525-50x50.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/970/Kantara-Hindi-Hindi-2022-20221104132525-150x150.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/970/Kantara-Hindi-Hindi-2022-20221104132525-500x500.jpg"
          }
        ],
        "songs": []
      }
    ],
    "playlists": [
      {
        "id": "107724265",
        "userId": "phulki_user",
        "title": "Punjab Se Bollywood",
        "subtitle": "314.6K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/PunjabseBollywood_20221125094913.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/PunjabseBollywood_20221125094913.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/PunjabseBollywood_20221125094913.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/punjab-se-bollywood/obx07Zza,rHuCJW60TJk1Q__",
        "songCount": "21",
        "firstname": "JioSaavn",
        "followerCount": "314625",
        "lastUpdated": "1669578795",
        "explicitContent": "0"
      },
      {
        "id": "946682072",
        "userId": "phulki_user",
        "title": "Most Searched Songs - Hindi",
        "subtitle": "30.4K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/MostSearchedSongsHindi_20221129163627.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/MostSearchedSongsHindi_20221129163627.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/MostSearchedSongsHindi_20221129163627.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/most-searched-songs---hindi/csv-SfcHUmHc1EngHtQQ2g__",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "30411",
        "lastUpdated": "1669700265",
        "explicitContent": "0"
      },
      {
        "id": "3379491",
        "userId": "phulki_user",
        "title": "Best Of 90s - Hindi",
        "subtitle": "116.3K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/NothingBut90s_20221102171656.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/NothingBut90s_20221102171656.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/NothingBut90s_20221102171656.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/best-of-90s---hindi/j44dgfQrkXY_",
        "songCount": "50",
        "firstname": "JioSaavn",
        "followerCount": "116288",
        "lastUpdated": "1669579054",
        "explicitContent": "0"
      },
      {
        "id": "101704478",
        "userId": "phulki_user",
        "title": "Jhakaas Remakes",
        "subtitle": "329.4K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/JhakaasRemakes_20221116161942.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/JhakaasRemakes_20221116161942.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/JhakaasRemakes_20221116161942.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/jhakaas-remakes/7e2LtwVBX6JFo9wdEAzFBA__",
        "songCount": "36",
        "firstname": "JioSaavn",
        "followerCount": "329398",
        "lastUpdated": "1669937876",
        "explicitContent": "0"
      },
      {
        "id": "85730158",
        "userId": "phulki_user",
        "title": "Let's Play - Armaan Malik",
        "subtitle": "22.6K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/ShiningStarArmaanMalik_20220720172839.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/ShiningStarArmaanMalik_20220720172839.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/ShiningStarArmaanMalik_20220720172839.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/lets-play---armaan-malik/UKM0ht9,MIc_",
        "songCount": "35",
        "firstname": "JioSaavn",
        "followerCount": "22632",
        "lastUpdated": "1669930029",
        "explicitContent": "0"
      },
      {
        "id": "158224019",
        "userId": "phulki_user",
        "title": "Dil Aur Duets",
        "subtitle": "65.7K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/DilAurDuets_20211028083612.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/DilAurDuets_20211028083612.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/DilAurDuets_20211028083612.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/dil-aur-duets/3bfFgQ0teQqO0eMLZZxqsA__",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "65669",
        "lastUpdated": "1669829171",
        "explicitContent": "0"
      },
      {
        "id": "1023629070",
        "userId": "phulki_user",
        "title": "Best Of Romance: Retro - Hindi",
        "subtitle": "17.5K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/BestOfRomance-RetroHindi_20220311164609.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/BestOfRomance-RetroHindi_20220311164609.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/BestOfRomance-RetroHindi_20220311164609.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/best-of-romance%3A-retro---hindi/O58xFfZTpydwtkLw7-JlUw__",
        "songCount": "50",
        "firstname": "JioSaavn",
        "followerCount": "17458",
        "lastUpdated": "1669589852",
        "explicitContent": "0"
      },
      {
        "id": "802336660",
        "userId": "phulki_user",
        "title": "Arijit's Sad Songs",
        "subtitle": "90.2K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/ArijitSadSongs_20211117063136.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/ArijitSadSongs_20211117063136.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/ArijitSadSongs_20211117063136.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/arijits-sad-songs/8RkefqkCO1huOxiEGmm6lQ__",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "90179",
        "lastUpdated": "1669589843",
        "explicitContent": "0"
      },
      {
        "id": "156654587",
        "userId": "phulki_user",
        "title": "Let's Play - Jubin Nautiyal",
        "subtitle": "75.4K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/JubinNautiyalSings_20220722150848.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/JubinNautiyalSings_20220722150848.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/JubinNautiyalSings_20220722150848.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/lets-play---jubin-nautiyal/cyd1elB4lx5ieSJqt9HmOQ__",
        "songCount": "32",
        "firstname": "JioSaavn",
        "followerCount": "75371",
        "lastUpdated": "1669764510",
        "explicitContent": "0"
      },
      {
        "id": "913519169",
        "userId": "phulki_user",
        "title": "Indipop Dance Songs - Hindi",
        "subtitle": "3.3K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/IndipopDanceSongsHindi_20221130183732.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/IndipopDanceSongsHindi_20221130183732.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/IndipopDanceSongsHindi_20221130183732.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/indipop-dance-songs---hindi/kcIoXkJqA3mO0eMLZZxqsA__",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "3274",
        "lastUpdated": "1669804723",
        "explicitContent": "0"
      },
      {
        "id": "72903410",
        "userId": "phulki_user",
        "title": "Sirf Unplugged",
        "subtitle": "73.3K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/Unplugged_20220110155848.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/Unplugged_20220110155848.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/Unplugged_20220110155848.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/sirf-unplugged/QkY0PeqdTW4_",
        "songCount": "26",
        "firstname": "JioSaavn",
        "followerCount": "73285",
        "lastUpdated": "1669590320",
        "explicitContent": "0"
      },
      {
        "id": "57881942",
        "userId": "phulki_user",
        "title": "Hindi Hip Hop",
        "subtitle": "61K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/RapCypherHindi_20221031053159.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/RapCypherHindi_20221031053159.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/RapCypherHindi_20221031053159.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi-hip-hop/aeQSR5fSByI_",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "61034",
        "lastUpdated": "1668041661",
        "explicitContent": "0"
      },
      {
        "id": "83421839",
        "userId": "phulki_user",
        "title": "Ishqiyaan",
        "subtitle": "547.2K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/Ishqiyaan_20221107163945.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/Ishqiyaan_20221107163945.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/Ishqiyaan_20221107163945.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/ishqiyaan/dyqSeSlJrvI_",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "547218",
        "lastUpdated": "1669953756",
        "explicitContent": "0"
      },
      {
        "id": "903166403",
        "userId": "phulki_user",
        "title": "Best Of Romance - Hindi",
        "subtitle": "35.4K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/BestOfRomanceHindi_20221027154051.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/BestOfRomanceHindi_20221027154051.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/BestOfRomanceHindi_20221027154051.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/best-of-romance---hindi/SBKnUgjNeMIwkg5tVhI3fw__",
        "songCount": "50",
        "firstname": "JioSaavn",
        "followerCount": "35388",
        "lastUpdated": "1669589587",
        "explicitContent": "0"
      },
      {
        "id": "6689255",
        "userId": "phulki_user",
        "title": "Taaza Tunes",
        "subtitle": "Just Updated",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/TaazaTunes_20221202101715.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/TaazaTunes_20221202101715.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/TaazaTunes_20221202101715.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/taaza-tunes/Me5RridRfDk_",
        "songCount": "50",
        "firstname": "JioSaavn",
        "followerCount": "550397",
        "lastUpdated": "1670193938",
        "explicitContent": "0"
      },
      {
        "id": "58057412",
        "userId": "phulki_user",
        "title": "Let's Play - Best Of Arijit Singh",
        "subtitle": "692.4K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/Let_sPlayBestOfArijitSingh_20221107060254.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/Let_sPlayBestOfArijitSingh_20221107060254.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/Let_sPlayBestOfArijitSingh_20221107060254.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/lets-play---best-of-arijit-singh/Iz0pi7nkjUE_",
        "songCount": "50",
        "firstname": "JioSaavn",
        "followerCount": "692434",
        "lastUpdated": "1669589567",
        "explicitContent": "0"
      },
      {
        "id": "5148894",
        "userId": "phulki_user",
        "title": "Nach Le",
        "subtitle": "517.1K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/NachLe_20221104103410.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/NachLe_20221104103410.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/NachLe_20221104103410.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/nach-le/UQjTO6rFZfc_",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "517087",
        "lastUpdated": "1669953782",
        "explicitContent": "0"
      },
      {
        "id": "159470188",
        "userId": "phulki_user",
        "title": "90s Duets - Hindi",
        "subtitle": "76.2K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/90sDuetsHindiSongs_20210120154331.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/90sDuetsHindiSongs_20210120154331.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/90sDuetsHindiSongs_20210120154331.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/90s-duets---hindi/Icd5-BIRMLpFo9wdEAzFBA__",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "76222",
        "lastUpdated": "1669590174",
        "explicitContent": "0"
      },
      {
        "id": "156473621",
        "userId": "phulki_user",
        "title": "Pop Mein Top",
        "subtitle": "229.2K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/PopMeinTop_20221118092811.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/PopMeinTop_20221118092811.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/PopMeinTop_20221118092811.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/pop-mein-top/pDQtHvJRh4IGSw2I1RxdhQ__",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "229245",
        "lastUpdated": "1669948186",
        "explicitContent": "0"
      },
      {
        "id": "39416670",
        "userId": "phulki_user",
        "title": "Let's Play - Kumar Sanu",
        "subtitle": "319.2K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/90sKingKumarSanu_20220722151009.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/90sKingKumarSanu_20220722151009.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/90sKingKumarSanu_20220722151009.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/lets-play---kumar-sanu/QeBmhG7Y1uE_",
        "songCount": "71",
        "firstname": "JioSaavn",
        "followerCount": "319230",
        "lastUpdated": "1669589589",
        "explicitContent": "0"
      },
      {
        "id": "1080335349",
        "userId": "phulki_user",
        "title": "Hindi Hit Songs",
        "subtitle": "989 Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/HindiHitSongs_20220913160911.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/HindiHitSongs_20220913160911.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/HindiHitSongs_20220913160911.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi-hit-songs/ZodsPn39CSjwxP8tCU-flw__",
        "songCount": "30",
        "firstname": "JioSaavn",
        "followerCount": "989",
        "lastUpdated": "1669592016",
        "explicitContent": "0"
      },
      {
        "id": "158223987",
        "userId": "phulki_user",
        "title": "Chill Maaro",
        "subtitle": "26.8K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/ChillMaaro_20221027154028.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/ChillMaaro_20221027154028.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/ChillMaaro_20221027154028.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/chill-maaro/CZTTBas4j8RieSJqt9HmOQ__",
        "songCount": "20",
        "firstname": "JioSaavn",
        "followerCount": "26791",
        "lastUpdated": "1669591689",
        "explicitContent": "0"
      },
      {
        "id": "330056058",
        "userId": "phulki_user",
        "title": "Desi Rock",
        "subtitle": "19.5K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/DesiRockSongs_20210120154545.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/DesiRockSongs_20210120154545.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/DesiRockSongs_20210120154545.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/desi-rock/DGl4UBWnRqlFo9wdEAzFBA__",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "19479",
        "lastUpdated": "1669701974",
        "explicitContent": "0"
      },
      {
        "id": "154546827",
        "userId": "phulki_user",
        "title": "90s Dance Dhamaaka",
        "subtitle": "52.7K Followers",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/90sDanceDhamaaka_20210120154344.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/90sDanceDhamaaka_20210120154344.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/90sDanceDhamaaka_20210120154344.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/90s-dance-dhamaaka/g2LdJVC02t1ieSJqt9HmOQ__",
        "songCount": "25",
        "firstname": "JioSaavn",
        "followerCount": "52722",
        "lastUpdated": "1669590397",
        "explicitContent": "0"
      }
    ],
    "charts": [
      {
        "id": "110858205",
        "title": "Trending Today",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/charts_TrendingToday_149406_20220319164713.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/charts_TrendingToday_149406_20220319164713.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/charts_TrendingToday_149406_20220319164713.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/trending_today/I3kvhipIy73uCJW60TJk1Q__",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "848372055",
        "title": "Hindi Chartbusters",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/charts_HindiChartbusters_158236_20220311194231.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/charts_HindiChartbusters_158236_20220311194231.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/charts_HindiChartbusters_158236_20220311194231.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_chartbusters/1HiqW,xnqZTuCJW60TJk1Q__",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "142311984",
        "title": "Romantic Top 40",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/charts_RomanticTop40_167985_20220311173413.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/charts_RomanticTop40_167985_20220311173413.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/charts_RomanticTop40_167985_20220311173413.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/romantic_top_40/m9Qkal5S733ufxkxMEIbIw__",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "48147819",
        "title": "Hindi 00s",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi00s_122250_20190906160607.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi00s_122250_20190906160607.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi00s_122250_20190906160607.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_00s/tsJahdem34A_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "48147816",
        "title": "Hindi 90s",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi90s_142072_20190906160631.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi90s_142072_20190906160631.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi90s_142072_20190906160631.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_90s/T64MUCqdndw_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "82712615",
        "title": "Hindi 80s",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi80s_108023_20220105060041.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi80s_108023_20220105060041.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi80s_108023_20220105060041.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_80s/fE9YxTvTDjU_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "82712414",
        "title": "Hindi 70s",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi70s_119337_20220105060121.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi70s_119337_20220105060121.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi70s_119337_20220105060121.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_70s/VSMrnr-njCk_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "82711924",
        "title": "Hindi 60s",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi60s_124027_20220105060140.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi60s_124027_20220105060140.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/logo/charts_Hindi60s_124027_20220105060140.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_60s/TOL5Rewc8Mk_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "82711913",
        "title": "Hindi Retro",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/charts_HindiRetro_157266_20220311175017.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/charts_HindiRetro_157266_20220311175017.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/charts_HindiRetro_157266_20220311175017.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/hindi_retro/dYn-,-QcKzA_",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      },
      {
        "id": "110858203",
        "title": "Pune Hot 50",
        "subtitle": "JioSaavn",
        "type": "playlist",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/editorial/charts_PuneHot50_124670_20220311201556.jpg"
          },
          {
            "quality": "150x150",
            "link": "https://c.saavncdn.com/editorial/charts_PuneHot50_124670_20220311201556.jpg"
          },
          {
            "quality": "500x500",
            "link": "https://c.saavncdn.com/editorial/charts_PuneHot50_124670_20220311201556.jpg"
          }
        ],
        "url": "https://www.jiosaavn.com/featured/pune_hot_50/I3kvhipIy70wkg5tVhI3fw__",
        "firstname": "JioSaavn",
        "explicitContent": "0",
        "language": "hindi"
      }
    ],
    "trending": {
      "songs": [
        {
          "id": "1glW_JN3",
          "name": "Baarish Mein Tum",
          "type": "song",
          "album": {
            "id": "37873751",
            "name": "Baarish Mein Tum",
            "url": "https://www.jiosaavn.com/album/baarish-mein-tum/RnxWovW5sko_"
          },
          "year": "2022",
          "releaseDate": "2022-09-05",
          "duration": "227",
          "label": "",
          "primaryArtists": [
            {
              "id": "464932",
              "name": "Neha Kakkar",
              "url": "https://www.jiosaavn.com/artist/neha-kakkar-/EkEBV7JAU-I_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "singer"
            },
            {
              "id": "4867121",
              "name": "Rohanpreet Singh",
              "url": "https://www.jiosaavn.com/artist/rohanpreet-singh-/sgTucE78tWo_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/867/Pehli-Mulakaat-Punjabi-2018-20181031190234-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/867/Pehli-Mulakaat-Punjabi-2018-20181031190234-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/867/Pehli-Mulakaat-Punjabi-2018-20181031190234-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "3252529",
              "name": "ShowKidd",
              "url": "https://www.jiosaavn.com/artist/showkidd-/km8FO,naz6Y_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/369/Biba-Remix-Punjabi-2020-20200118094001-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/369/Biba-Remix-Punjabi-2020-20200118094001-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/369/Biba-Remix-Punjabi-2020-20200118094001-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "13991986",
              "name": "Harsh Kargeti",
              "url": "https://www.jiosaavn.com/artist/harsh-kargeti-/e,9XWppakhc_",
              "image": false,
              "type": "artist",
              "role": ""
            }
          ],
          "featuredArtists": [],
          "explicitContent": "0",
          "playCount": "34913022",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/Baarish-Mein-Tum/Baarish-Mein-Tum/QQ8HZit6eQA",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/493/Baarish-Mein-Tum-Hindi-2022-20220902211010-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/493/Baarish-Mein-Tum-Hindi-2022-20220902211010-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/493/Baarish-Mein-Tum-Hindi-2022-20220902211010-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "zL2fFBbR",
          "name": "Teri Galliyon Se",
          "type": "song",
          "album": {
            "id": "37225128",
            "name": "Teri Galliyon Se",
            "url": "https://www.jiosaavn.com/album/teri-galliyon-se/W0H0OZAqWS0_"
          },
          "year": "2022",
          "releaseDate": "2022-08-11",
          "duration": "293",
          "label": "",
          "primaryArtists": [
            {
              "id": "881158",
              "name": "Jubin Nautiyal",
              "url": "https://www.jiosaavn.com/artist/jubin-nautiyal-/uGdfg6zGf4s_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "singer"
            },
            {
              "id": "890048",
              "name": "Meet Bros",
              "url": "https://www.jiosaavn.com/artist/meet-bros-/sUhZsB99Ezg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Meet_Bros_20180306113844_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Meet_Bros_20180306113844_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Meet_Bros_20180306113844_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "featuredArtists": [],
          "explicitContent": "0",
          "playCount": "24531640",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/Teri-Galliyon-Se/Teri-Galliyon-Se/CiRZVzJyVWE",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/584/Teri-Galliyon-Se-Hindi-2022-20220810175447-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/584/Teri-Galliyon-Se-Hindi-2022-20220810175447-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/584/Teri-Galliyon-Se-Hindi-2022-20220810175447-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "VLFclCGV",
          "name": "Jaana",
          "type": "song",
          "album": {
            "id": "37537572",
            "name": "Jaana",
            "url": "https://www.jiosaavn.com/album/jaana/uZgrQlD9phs_"
          },
          "year": "2022",
          "releaseDate": "2022-08-24",
          "duration": "231",
          "label": "Universal Music India Pvt Ltd.",
          "primaryArtists": [
            {
              "id": "4670197",
              "name": "Stebin Ben",
              "url": "https://www.jiosaavn.com/artist/stebin-ben-/cIgvj9lx6Dc_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Stebin_Ben_004_20200930091339_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Stebin_Ben_004_20200930091339_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Stebin_Ben_004_20200930091339_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "singer"
            }
          ],
          "featuredArtists": [],
          "explicitContent": "0",
          "playCount": "9078857",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/Jaana/Jaana/JiQtUhhzcGU",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/400/Jaana-Hindi-2022-20220822053552-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/400/Jaana-Hindi-2022-20220822053552-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/400/Jaana-Hindi-2022-20220822053552-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "10lVR3P9",
          "name": "O Sajna",
          "type": "song",
          "album": {
            "id": "38272684",
            "name": "O Sajna",
            "url": "https://www.jiosaavn.com/album/o-sajna/YUetkhn4YCA_"
          },
          "year": "2022",
          "releaseDate": "2022-09-19",
          "duration": "245",
          "label": "",
          "primaryArtists": [
            {
              "id": "1595701",
              "name": "Tanishk Bagchi",
              "url": "https://www.jiosaavn.com/artist/tanishk-bagchi-/Y-5m-phldpg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "music"
            },
            {
              "id": "464932",
              "name": "Neha Kakkar",
              "url": "https://www.jiosaavn.com/artist/neha-kakkar-/EkEBV7JAU-I_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Neha_Kakkar_006_20200822042626_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "singer"
            },
            {
              "id": "680475",
              "name": "Jaani",
              "url": "https://www.jiosaavn.com/artist/jaani-/a0Vk-AlzJu8_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Jaani_001_20191128083617_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Jaani_001_20191128083617_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Jaani_001_20191128083617_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "456528",
              "name": "Lalit Sen",
              "url": "https://www.jiosaavn.com/artist/lalit-sen-/1CBV7pSboDY_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/489/Tulsidas-Krit-Ramayan-101-Choupaiyon-Mein-2001-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/489/Tulsidas-Krit-Ramayan-101-Choupaiyon-Mein-2001-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/489/Tulsidas-Krit-Ramayan-101-Choupaiyon-Mein-2001-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "featuredArtists": [],
          "explicitContent": "0",
          "playCount": "11320787",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/O-Sajna/O-Sajna/QVgHZyYDZwo",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/735/O-Sajna-Hindi-2022-20220916171002-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/735/O-Sajna-Hindi-2022-20220916171002-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/735/O-Sajna-Hindi-2022-20220916171002-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "fNWlH88Q",
          "name": "Galliyan Returns (From &quot;Ek Villain Returns&quot;)",
          "type": "song",
          "album": {
            "id": "36200584",
            "name": "Galliyan Returns (From &quot;Ek Villain Returns&quot;)",
            "url": "https://www.jiosaavn.com/album/galliyan-returns-from-ek-villain-returns/QiD0ZxLKlfA_"
          },
          "year": "2022",
          "releaseDate": "2022-07-04",
          "duration": "350",
          "label": "",
          "primaryArtists": [
            {
              "id": "484852",
              "name": "Ankit Tiwari",
              "url": "https://www.jiosaavn.com/artist/ankit-tiwari-/eHCWDfgAqlg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Ankit_Tiwari_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Ankit_Tiwari_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Ankit_Tiwari_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "singer"
            },
            {
              "id": "473441",
              "name": "Manoj Muntashir",
              "url": "https://www.jiosaavn.com/artist/manoj-muntashir-/eaiDjU0BhyA_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "featuredArtists": [],
          "explicitContent": "0",
          "playCount": "13505865",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/Galliyan-Returns-From-Ek-Villain-Returns/Galliyan-Returns-From-Ek-Villain-Returns/FiY8XTwID2I",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/104/Galliyan-Returns-From-Ek-Villain-Returns-Hindi-2022-20220704161001-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/104/Galliyan-Returns-From-Ek-Villain-Returns-Hindi-2022-20220704161001-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/104/Galliyan-Returns-From-Ek-Villain-Returns-Hindi-2022-20220704161001-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "IrEzzCfb",
          "name": "Maan Meri Jaan",
          "type": "song",
          "album": {
            "id": "38893739",
            "name": "Champagne Talk",
            "url": "https://www.jiosaavn.com/album/champagne-talk/8O,CIqHgSR0_"
          },
          "year": "2022",
          "releaseDate": "2022-10-12",
          "duration": "194",
          "label": "Warner Music India",
          "primaryArtists": [
            {
              "id": "14327531",
              "name": "King",
              "url": "https://www.jiosaavn.com/artist/king-/axyoun05Pkg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/King_002_20221012124722_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/King_002_20221012124722_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/King_002_20221012124722_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": "music"
            }
          ],
          "featuredArtists": [],
          "explicitContent": "1",
          "playCount": "4218495",
          "language": "hindi",
          "url": "https://www.jiosaavn.com/s/song/hindi/Champagne-Talk/Maan-Meri-Jaan/ORouSw5zUVE",
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg?bch=463962"
            }
          ]
        }
      ],
      "albums": [
        {
          "id": "39732998",
          "name": "Ram Siya Ram (Lo-Fi)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-11-03",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/ram-siya-ram-lo-fi-2022/ekgJDZFhTiQ_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "8775295",
              "name": "STRIVEN",
              "url": "https://www.jiosaavn.com/artist/striven-/zhpYGbAozqo_",
              "image": false,
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/672/Ram-Siya-Ram-Lo-Fi-Hindi-2022-20221107232040-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/672/Ram-Siya-Ram-Lo-Fi-Hindi-2022-20221107232040-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/672/Ram-Siya-Ram-Lo-Fi-Hindi-2022-20221107232040-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "35600152",
          "name": "Ijazzat Hai",
          "type": "album",
          "year": "",
          "releaseDate": "2022-06-09",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/ijazzat-hai-2022/EwYVcpKY-W0_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "461964",
              "name": "Sachin Gupta",
              "url": "https://www.jiosaavn.com/artist/sachin-gupta-/BAmeiM9pGZo_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/938/Prince-Hindi-2010-20190612124629-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/938/Prince-Hindi-2010-20190612124629-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/938/Prince-Hindi-2010-20190612124629-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/399/Ijazzat-Hai-Hindi-2022-20220608175759-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/399/Ijazzat-Hai-Hindi-2022-20220608175759-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/399/Ijazzat-Hai-Hindi-2022-20220608175759-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "37874149",
          "name": "Sita Ramam (Hindi) (Original Motion Picture Soundtrack)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-09-02",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "10",
          "url": "https://www.jiosaavn.com/s/album/hindi/sita-ramam-hindi-original-motion-picture-soundtrack-2022/iR05Wcpk,G0_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "1753955",
              "name": "Vishal Chandrashekhar",
              "url": "https://www.jiosaavn.com/artist/vishal-chandrashekhar-/eBvwcuLf8Z0_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Vishal_Chandrashekhar_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Vishal_Chandrashekhar_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Vishal_Chandrashekhar_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/863/Sita-Ramam-Hindi-Original-Motion-Picture-Soundtrack-Hindi-2022-20220905152715-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/863/Sita-Ramam-Hindi-Original-Motion-Picture-Soundtrack-Hindi-2022-20220905152715-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/863/Sita-Ramam-Hindi-Original-Motion-Picture-Soundtrack-Hindi-2022-20220905152715-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "36784218",
          "name": "Merre Liye",
          "type": "album",
          "year": "",
          "releaseDate": "2022-07-27",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/merre-liye-2022/p4JE4NIZvK0_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "8797744",
              "name": "Mohammad Faiz",
              "url": "https://www.jiosaavn.com/artist/mohammad-faiz-/3-uyLZJYAp8_",
              "image": false,
              "type": "artist",
              "role": ""
            },
            {
              "id": "455132",
              "name": " Himesh Reshammiya",
              "url": "https://www.jiosaavn.com/artist/-himesh-reshammiya-/N,m6H0-rqiY_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Himesh_Reshammiya_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Himesh_Reshammiya_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Himesh_Reshammiya_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/482/Merre-Liye-Hindi-2022-20220817194916-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/482/Merre-Liye-Hindi-2022-20220817194916-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/482/Merre-Liye-Hindi-2022-20220817194916-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "38173054",
          "name": "Manike (From &quot;Thank God&quot;)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-09-16",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/manike-from-thank-god-2022/3-XV61xv5tM_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "1618262",
              "name": "Yohani",
              "url": "https://www.jiosaavn.com/artist/yohani-/PrjqCZUHiTs_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Yohani_000_20211012091955_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Yohani_000_20211012091955_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Yohani_000_20211012091955_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "881158",
              "name": " Jubin Nautiyal",
              "url": "https://www.jiosaavn.com/artist/-jubin-nautiyal-/uGdfg6zGf4s_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "1595701",
              "name": " Tanishk Bagchi",
              "url": "https://www.jiosaavn.com/artist/-tanishk-bagchi-/Y-5m-phldpg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "6133712",
              "name": " Surya Ragunaathan",
              "url": "https://www.jiosaavn.com/artist/-surya-ragunaathan-/redmK6wDZRY_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/767/Mard-Ko-Dard-Nahi-Hota-Hindi-2019-20190311154310-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/767/Mard-Ko-Dard-Nahi-Hota-Hindi-2019-20190311154310-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/767/Mard-Ko-Dard-Nahi-Hota-Hindi-2019-20190311154310-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "8649429",
              "name": " Chamath Sangeeth",
              "url": "https://www.jiosaavn.com/artist/-chamath-sangeeth-/E5uH0RWng6E_",
              "image": false,
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "36308633",
          "name": "Dil (From &quot;Ek Villain Returns&quot;)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-07-08",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/dil-from-ek-villain-returns-2022/LIl-v4bec9E_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "8875707",
              "name": "Kaushik-Guddu",
              "url": "https://www.jiosaavn.com/artist/kaushik-guddu-/fANJW0lKaZs_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Kaushik_Guddu_000_20220125090736_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Kaushik_Guddu_000_20220125090736_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Kaushik_Guddu_000_20220125090736_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "7436979",
              "name": " Raghav Chaitanya",
              "url": "https://www.jiosaavn.com/artist/-raghav-chaitanya-/WZZxrSnCG6o_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Raghav_Chaitanya_20200211095003_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Raghav_Chaitanya_20200211095003_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Raghav_Chaitanya_20200211095003_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "710601",
              "name": " Kunaal Vermaa",
              "url": "https://www.jiosaavn.com/artist/-kunaal-vermaa-/DGLdKvhUtpU_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Kunaal_Vermaa_20191129072004_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Kunaal_Vermaa_20191129072004_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Kunaal_Vermaa_20191129072004_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/517/Dil-From-Ek-Villain-Returns-Hindi-2022-20220711121012-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/517/Dil-From-Ek-Villain-Returns-Hindi-2022-20220711121012-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/517/Dil-From-Ek-Villain-Returns-Hindi-2022-20220711121012-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "39209161",
          "name": "Mere Ghar Ram Aaye Hain",
          "type": "album",
          "year": "",
          "releaseDate": "2022-10-20",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/mere-ghar-ram-aaye-hain-2022/dsife5uVB1k_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "881158",
              "name": "Jubin Nautiyal",
              "url": "https://www.jiosaavn.com/artist/jubin-nautiyal-/uGdfg6zGf4s_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "653208",
              "name": " Payal Dev",
              "url": "https://www.jiosaavn.com/artist/-payal-dev-/szd0Qcak34Q_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Payal_Dev_001_20191220112849_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Payal_Dev_001_20191220112849_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Payal_Dev_001_20191220112849_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "473441",
              "name": " Manoj Muntashir",
              "url": "https://www.jiosaavn.com/artist/-manoj-muntashir-/eaiDjU0BhyA_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/259/Episode-1-Dekhte-Dekhte-From-Muntashir-Ki-Diary-Se--Hindi-2019-20190902135108-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/946/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/946/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/946/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "38682222",
          "name": "Bhediya",
          "type": "album",
          "year": "",
          "releaseDate": "2022-11-22",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "4",
          "url": "https://www.jiosaavn.com/s/album/hindi/bhediya-2022/wSM2AOubajk_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "461968",
              "name": "Sachin-Jigar",
              "url": "https://www.jiosaavn.com/artist/sachin-jigar-/JO1Nx088Pfo_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Sachin-Jigar_002_20180507092234_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Sachin-Jigar_002_20180507092234_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Sachin-Jigar_002_20180507092234_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "6565182",
              "name": " K4 Kekho",
              "url": "https://www.jiosaavn.com/artist/-k4-kekho-/ok,PYU,LV0I_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/148/Best-Of-K4-Kekho-English-2019-20190627200229-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/148/Best-Of-K4-Kekho-English-2019-20190627200229-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/148/Best-Of-K4-Kekho-English-2019-20190627200229-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/815/Bhediya-Hindi-2022-20221122142900-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "39765286",
          "name": "Gunehgar",
          "type": "album",
          "year": "",
          "releaseDate": "2022-11-10",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "12",
          "url": "https://www.jiosaavn.com/s/album/hindi/gunehgar-2022/n7Q4G1YU3KU_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "653605",
              "name": "DIVINE",
              "url": "https://www.jiosaavn.com/artist/divine-/h9939G376uw_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/DIVINE_003_20220912102149_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/DIVINE_003_20220912102149_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/DIVINE_003_20220912102149_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/679/Gunehgar-Hindi-2022-20221108170043-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/679/Gunehgar-Hindi-2022-20221108170043-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/679/Gunehgar-Hindi-2022-20221108170043-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "37778821",
          "name": "Hustle 2.0",
          "type": "album",
          "year": "",
          "releaseDate": "2022-08-29",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "138",
          "url": "https://www.jiosaavn.com/s/album/hindi/hustle-2.0-2022/yOv4wJMQKXY_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "2151084",
              "name": "Various Artist",
              "url": "https://www.jiosaavn.com/artist/various-artist-/jhIPBp74bIg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/221/Rustom-Hindi-2018-20191029174008-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/221/Rustom-Hindi-2018-20191029174008-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/221/Rustom-Hindi-2018-20191029174008-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/578/Hustle-2-0-Hindi-2022-20221106185502-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/578/Hustle-2-0-Hindi-2022-20221106185502-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/578/Hustle-2-0-Hindi-2022-20221106185502-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "39075494",
          "name": "Dil De Diya (From &quot;Thank God&quot;)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-10-17",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/dil-de-diya-from-thank-god-2022/GIg-doGwKtw_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "489732",
              "name": "Rochak Kohli",
              "url": "https://www.jiosaavn.com/artist/rochak-kohli-/eegLtbffmDE_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Rochak_Kohli_20200108100702_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Rochak_Kohli_20200108100702_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Rochak_Kohli_20200108100702_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "711605",
              "name": " Anand Raaj Anand",
              "url": "https://www.jiosaavn.com/artist/-anand-raaj-anand-/OLdQ1N8XxPI_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/661/Rehnaa-Hai-Terre-Dil-Mein-Hindi-2001-50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/661/Rehnaa-Hai-Terre-Dil-Mein-Hindi-2001-150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/661/Rehnaa-Hai-Terre-Dil-Mein-Hindi-2001-500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "13934123",
              "name": " Rashmi Virag",
              "url": "https://www.jiosaavn.com/artist/-rashmi-virag-/rR69rrf5dlo_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Rashmi_Virag_000_20220920120709_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Rashmi_Virag_000_20220920120709_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Rashmi_Virag_000_20220920120709_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "455415",
              "name": " Sameer",
              "url": "https://www.jiosaavn.com/artist/-sameer-/zbXOIZIhW-8_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Sameer-20170714064856_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Sameer-20170714064856_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Sameer-20170714064856_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/000/Dil-De-Diya-From-Thank-God-Hindi-2022-20221014181001-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/000/Dil-De-Diya-From-Thank-God-Hindi-2022-20221014181001-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/000/Dil-De-Diya-From-Thank-God-Hindi-2022-20221014181001-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "40359942",
          "name": "Bana Sharabi (From &quot;Govinda Naam Mera&quot;)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-11-29",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/bana-sharabi-from-govinda-naam-mera-2022/7mHMB1b1Rk8_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "1595701",
              "name": "Tanishk Bagchi",
              "url": "https://www.jiosaavn.com/artist/tanishk-bagchi-/Y-5m-phldpg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Tanishk_Bagchi_002_20190607071953_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "881158",
              "name": " Jubin Nautiyal",
              "url": "https://www.jiosaavn.com/artist/-jubin-nautiyal-/uGdfg6zGf4s_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/727/Bana-Sharabi-From-Govinda-Naam-Mera-Hindi-2022-20221129180153-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/727/Bana-Sharabi-From-Govinda-Naam-Mera-Hindi-2022-20221129180153-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/727/Bana-Sharabi-From-Govinda-Naam-Mera-Hindi-2022-20221129180153-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "37152625",
          "name": "Deva Deva (From &quot;Brahmastra&quot;)",
          "type": "album",
          "year": "",
          "releaseDate": "2022-08-08",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/deva-deva-from-brahmastra-2022/FzoBiZXeQPk_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "456323",
              "name": "Pritam",
              "url": "https://www.jiosaavn.com/artist/pritam-/OaFg9HPZgq8_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "459320",
              "name": " Arijit Singh",
              "url": "https://www.jiosaavn.com/artist/-arijit-singh-/LlRWpHzy3Hk_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Arijit_Singh_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Arijit_Singh_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Arijit_Singh_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "458681",
              "name": " Amitabh Bhattacharya",
              "url": "https://www.jiosaavn.com/artist/-amitabh-bhattacharya-/hsNRL6ZmJmo_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg?bch=463962"
            }
          ]
        },
        {
          "id": "40266377",
          "name": "Mera Dil Ye Pukare - Tu Aaja - Heartlock Mix",
          "type": "album",
          "year": "",
          "releaseDate": "2022-11-25",
          "playCount": "",
          "language": "hindi",
          "explicitContent": "0",
          "songCount": "1",
          "url": "https://www.jiosaavn.com/s/album/hindi/mera-dil-ye-pukare---tu-aaja---heartlock-mix-2022/o2pkO9T57wA_",
          "primaryArtists": [],
          "featuredArtists": [],
          "artists": [
            {
              "id": "455109",
              "name": "Lata Mangeshkar",
              "url": "https://www.jiosaavn.com/artist/lata-mangeshkar-/FCtl69DObYg_",
              "image": [
                {
                  "quality": "50x50",
                  "link": "https://c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "link": "https://c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "link": "https://c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_500x500.jpg"
                }
              ],
              "type": "artist",
              "role": ""
            },
            {
              "id": "14699256",
              "name": " Heartlock",
              "url": "https://www.jiosaavn.com/artist/-heartlock-/hx0cuEYjLRs_",
              "image": false,
              "type": "artist",
              "role": ""
            }
          ],
          "image": [
            {
              "quality": "50x50",
              "link": "https://c.saavncdn.com/436/Mera-Dil-Ye-Pukare-Tu-Aaja-Heartlock-Mix-Hindi-2022-20221130174133-50x50.jpg?bch=463962"
            },
            {
              "quality": "150x150",
              "link": "https://c.saavncdn.com/436/Mera-Dil-Ye-Pukare-Tu-Aaja-Heartlock-Mix-Hindi-2022-20221130174133-150x150.jpg?bch=463962"
            },
            {
              "quality": "500x500",
              "link": "https://c.saavncdn.com/436/Mera-Dil-Ye-Pukare-Tu-Aaja-Heartlock-Mix-Hindi-2022-20221130174133-500x500.jpg?bch=463962"
            }
          ]
        }
      ]
    }
  }
}
```

+++

| Query Paramter                                | Description                           | Required                               |
| --------------------------------------- | ------------------------------------- | -------------------------------------- |
| [!badge variant="contrast" text="language"] | One or more languages from     Hindi, English, Punjabi, Tamil, Telugu, Marathi, Gujarati, Bengali, Kannada, Bhojpuri, Malayalam, Urdu, Haryanvi, Rajasthani, Odia, Assamese | [!badge variant="primary" text="False"] |
