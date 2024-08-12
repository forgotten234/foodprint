var dictCountries = require('countries-list')
var dictCountriesEurope = []
var plastic = false
var fairtrade = undefined
var vegan = false
var bio = false
var saisonal = false
var average_h2o = 0.0
var average_co2_veg_fru = 0.0
var average_co2_milk = 0.0
var average_co2_meat = 0.0
var average_co2_other = 0.0
var average_co2_drinks = 0.0
var average_co2_total = 0.0
var seasons = ["spring", "summer", "fall", "winter"]
Object.keys(dictCountries.countries).forEach(function(key) {
  if(dictCountries.countries[key].continent === "EU"){
    dictCountriesEurope.push({
      country: dictCountries.countries[key].name,
      country_code: key
    })
  }
})
var waterFoodPrint = {
  "apfel": 1500,
  "brot": 600,
  "butter": 10000,
  "dinkel": 600,
  "ei": 900,
  "fisch": 80,
  "haenchen": 20000,
  "kartoffeln": 100,
  "kaese": 6000,
  "margine": 3000,
  "milch": 2000,
  "nudeln": 600,
  "olivenoel": 900000,
  "organge": 15000,
  "saft": 40000,
  "quark": 3000,
  "reis": 60000,
  "rindfleisch": 20000,
  "seitan": 3000,
  "sonnenblumenkerne": 70000,
  "tofu": 7000,
  "tomaten": 1000,
  "wurstaufschnitt": 10000,
  "zucker": 90
}
Object.keys(waterFoodPrint).forEach(function(key) {
  average_h2o = average_h2o + waterFoodPrint[key]
})
average_h2o = average_h2o / Object.keys(dictCountries.countries).length
console.log("Durchschnittlicher H2O Fußabdruck: " + average_h2o)
var co2FoodPrint = {
  veg_fru: {
    "ananas": {
      season: ["spring", "summer"],
      score: 0.9
    },
    "apfel": {
      season: ["summer", "fall"],
      score: 0.3
    },
    "aubergine": {
      season: ["summer", "fall"],
      score: 0.3
    },
    "avocado": {
      season: ["spring", "summer", "fall", "winter"],
      score: 0.6
    },
    "banane": {
      season: ["spring", "summer", "fall", "winter"],
      score: 0.6
    },
    "birne": {
      season: ["spring"],
      score: 0.3
    },
    "blumenkohl": {
      season: ["summer", "fall"],
      score: 0.2
    },
    "bohnen": {
      season: ["summer", "fall"],
      score: 0.8
    },
    "brokkoli": {
      season: ["summer"],
      score: 0.3
    },
    "champignons": {
      season: ["spring", "summer", "fall", "winter"],
      score: 1.3
    },
    "erbsen": {
      season: ["summer"],
      score: 0.4
    },
    "erdbeeren": {
      season: ["summer"],
      score: 0.3
    },
    "feldsalat": {
      season: ["winter"],
      score: 0.3
    },
    "fenchel": {
      season: ["fall"],
      score: 0.2
    },
    "gruenkohl": {
      season: ["winter"],
      score: 0.9
    },
    "karotten": {
      season: ["summer", "fall"],
      score: 0.1
    },
    "kartoffeln": {
      season: ["summer","fall"],
      score: 0.2
    },
    "kichererbsen": {
      season: ["spring", "summer", "fall", "winter"],
      score: 1.3
    },
    "kohlrabi": {
      season: ["spring", "summer"],
      score: 0.2
    },
    "kuerbis": {
      season: ["fall"],
      score: 0.2
    },
    "lauch": {
      season: ["summer", "fall", "winter"],
      score: 0.2
    },
    "leinsamen": {
      season: ["spring", "summer", "fall", "winter"],
      score: 1.4
    },
    "linsen": {
      season: ["spring", "summer", "fall", "winter"],
      score: 1.2
    },
    "mais": {
      season: ["summer"],
      score: 1.2
    },
    "organge": {
      season: ["winter", "spring"],
      score: 0.3
    },
    "paprika": {
      season: ["summer", "fall"],
      score: 0.6
    },
    "pfirsich": {
      season: ["summer", "fall"],
      score: 0.2
    },
    "rettich": {
      season: ["summer", "fall"],
      score: 0.2
    },
    "rosenkohl": {
      season: ["winter"],
      score: 0.3
    },
    "roteBeete": {
      season: ["fall"],
      score: 0.2
    },
    "rotkohl": {
      season: ["fall"],
      score: 0.2
    },
    "rucola": {
      season: ["summer", "fall"],
      score: 0.3
    },
    "salatgurke": {
      season: ["summer"],
      score: 0.4
    },
    "salatmischung": {
      season: ["summer"],
      score: 0.4
    },
    "sellerie": {
      season: ["fall"],
      score: 0.2
    },
    "spargel": {
      season: ["spring", "summer"],
      score: 0.2
    },
    "spinat": {
      season: ["spring", "winter"],
      score: 0.2
    },
    "tomaten": {
      season: ["summer", "fall"],
      score: 0.8
    },
    "trauben": {
      season: ["summer", "fall"],
      score: 0.4
    },
    "weißkohl": {
      season: ["spring", "fall"],
      score: 0.1
    },
    "zucchini": {
      season: ["summer"],
      score: 0.2
    },
    "zwiebeln": {
      season: ["summer", "fall"],
      score: 0.2
    }
  },
  milk_products: {
    "butter": 9.0,
    "ei": 3.0,
    "joghurt": 1.7,
    "kaese": 5.7,
    "milch": 1.4,
    "quark": 3.3,
    "sahne": 4.2
  },
  meat: {
    "veggieburger": 1.1,
    "fisch": 2.4,
    "haehnchen": 5.5,
    "lupine": 0.4,
    "rindfleisch": 13.6,
    "schweinefleisch": 4.6,
    "seitan": 2.5,
    "tempeh": 0.7,
    "tofu": 1.0,
  },
  other: {
    "brot": 0.6,
    "bulgur": 0.6,
    "dinkel": 0.7,
    "erdnuesse": 0.8,
    "haferflocken": 0.6,
    "honig": 2.0,
    "kokosoel": 2.3,
    "margarine": 2.0,
    "nudeln": 0.7,
    "olivenöl": 3.2,
    "pommes": 0.7,
    "reis": 3.1,
    "schokolade": 4.1,
    "sonnenblumenkerne": 1.5,
    "zucker": 0.7
  },
  drinks: {
    "bier": 0.9,
    "kaffee": 5.6,
    "limonade": 0.4,
    "mineralwassser": 0.2,
    "orangensaft": 0.7,
    "apfelsaft": 0.4,
    "wein": 0.75
  }
}
Object.keys(co2FoodPrint.veg_fru).forEach(function(key) {
  average_co2_veg_fru = average_co2_veg_fru + co2FoodPrint.veg_fru[key].score
})

average_co2_veg_fru = (average_co2_veg_fru / Object.keys(co2FoodPrint.veg_fru).length).toFixed(2)
Object.keys(co2FoodPrint.milk_products).forEach(function(key) {
  average_co2_milk = average_co2_milk + co2FoodPrint.milk_products[key]
})
average_co2_milk = (average_co2_milk / Object.keys(co2FoodPrint.milk_products).length).toFixed(2)

Object.keys(co2FoodPrint.meat).forEach(function(key) {
  average_co2_meat = average_co2_meat + co2FoodPrint.meat[key]
})
average_co2_meat = (average_co2_meat / Object.keys(co2FoodPrint.meat).length).toFixed(2)

Object.keys(co2FoodPrint.other).forEach(function(key) {
  average_co2_other = average_co2_other + co2FoodPrint.other[key]
})
average_co2_other = (average_co2_other / Object.keys(co2FoodPrint.other).length).toFixed(2)

Object.keys(co2FoodPrint.drinks).forEach(function(key) {
  average_co2_drinks = average_co2_drinks + co2FoodPrint.drinks[key]
})
average_co2_drinks = (average_co2_drinks / Object.keys(co2FoodPrint.drinks).length).toFixed(2)
average_co2_total = (average_co2_meat + average_co2_milk + average_co2_other + average_co2_drinks + average_co2_veg_fru) / 6
console.log("Durchschnittlicher Co2 Fußabdruck Milchprodukte: " + average_co2_milk)
console.log("Durchschnittlicher Co2 Fußabdruck Obst / Gemüse / Früchte: " + average_co2_veg_fru)
console.log("Durchschnittlicher Co2 Fußabdruck Fleisch: " + average_co2_meat)
console.log("Durchschnittlicher Co2 Fußabdruck other: " + average_co2_other)
console.log("Durchschnittlicher Co2 Fußabdruck Getränke: " + average_co2_drinks)

function generateScore(product){
  var score = 0
  if(dictCountriesEurope.some(e => e.country === product.country) ||
    dictCountriesEurope.some(e => e.country_code === product.country_code))
  {
    score++
  }
  else {
    score--
  }
  if(product.plastic === false){
    score++
  } else {
    score--
  }
  if(product.co2 < average_co2_total){
    score++
  }else {
    score--
  }
  if(product.h20 < average_h2o){
    score++
  }else {
    score--
  }
  if(product.bio === true){
    score++
  } else {
    score--
  }
  if(product.vegan === true){
    score++
  } else {
    score--
  }
  if(product.fairtrade === true){
    score++
  } else {
    score--
  }
  if(seasons.includes(product.season))
  {
    score++
  } else {
    score--
  }
  return score
}

//console.log(generateScore({country_code: "CH"}))
