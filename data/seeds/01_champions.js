exports.seed = function (knex) {
  return knex("champions").insert([
    {
      id: 1,
      champion_name: "Aatrox",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      top: true,
      jungle: false,
      mid: false,
      adc: false,
      support: false,
    },
    {
      id: 2,
      champion_name: "Ahri",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 3,
      champion_name: "Akali",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
      top: true,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 4,
      champion_name: "Alistar",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
      top: false,
      jungle: true,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 5,
      champion_name: "Amumu",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
      top: false,
      jungle: true,
      mid: false,
      adc: false,
      support: true,
    },
    {
      id: 6,
      champion_name: "Anivia",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 7,
      champion_name: "Annie",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 8,
      champion_name: "Aphelios",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
      top: false,
      jungle: false,
      mid: false,
      adc: true,
      support: false,
    },
    {
      id: 9,
      champion_name: "Ashe",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      top: true,
      jungle: false,
      mid: false,
      adc: true,
      support: false,
    },
    {
      id: 10,
      champion_name: "Aurelion Sol",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 11,
      champion_name: "Azir",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 12,
      champion_name: "Bard",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
      top: false,
      jungle: false,
      mid: false,
      adc: false,
      support: true,
    },
    {
      id: 13,
      champion_name: "Blitzcrank",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
      top: false,
      jungle: false,
      mid: false,
      adc: false,
      support: true,
    },
    {
      id: 14,
      champion_name: "Brand",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 15,
      champion_name: "Braum",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
      top: true,
      jungle: false,
      mid: false,
      adc: false,
      support: true,
    },
    {
      id: 16,
      champion_name: "Caitlyn",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      top: true,
      jungle: false,
      mid: true,
      adc: true,
      support: false,
    },
    {
      id: 17,
      champion_name: "Camille",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
      top: true,
      jungle: false,
      mid: false,
      adc: false,
      support: true,
    },
    {
      id: 18,
      champion_name: "Cassiopeia",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
      top: true,
      jungle: false,
      mid: true,
      adc: true,
      support: false,
    },
    {
      id: 19,
      champion_name: "Cho'Gath",
      champion_pic:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
      top: true,
      jungle: false,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 20,
      champion_name: "Corki",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 21,
      champion_name: "Darius",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
      top: true,
      jungle: true,
      mid: false,
      adc: false,
      support: false,
    },
    {
      id: 22,
      champion_name: "Diana",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
      top: false,
      jungle: true,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 23,
      champion_name: "Dr. Mundo",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
      top: true,
      jungle: true,
      mid: false,
      adc: false,
      support: false,
    },
    {
      id: 24,
      champion_name: "Draven",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
      top: false,
      jungle: false,
      mid: false,
      adc: true,
      support: false,
    },
    {
      id: 25,
      champion_name: "Ekko",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
      top: false,
      jungle: true,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 26,
      champion_name: "Elise",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
      top: false,
      jungle: true,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 27,
      champion_name: "Evelynn",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
      top: false,
      jungle: true,
      mid: true,
      adc: false,
      support: false,
    },
    {
      id: 28,
      champion_name: "Ezreal",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: true,
      support: false,
    },
    {
      id: 29,
      champion_name: "Fiddlesticks",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
      top: true,
      jungle: true,
      mid: true,
      adc: false,
      support: true,
    },
    {
      id: 30,
      champion_name: "Fiora",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
      top: true,
      jungle: false,
      mid: false,
      adc: false,
      support: false,
    },
    {
      id: 31,
      champion_name: "Fizz",
      champion_pic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
      top: false,
      jungle: false,
      mid: true,
      adc: false,
      support: false,
    },
  ]);
};
