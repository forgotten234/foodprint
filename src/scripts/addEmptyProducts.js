/*
  For empty products:
  @argument 1: start Id
  @argument 2: end Id
  @argument 3: time in ms -> only needed if a lot products need to be added. If not the script
                always 1 Minute
*/
const fetch = require("node-fetch");
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true })
var data_counter = parseInt(process.argv[2])

var timer = setInterval(function(){
if(data_counter === parseInt(process.argv[3])){
  walker = 0
} else {
  db.collection('Self-Research').doc(data_counter.toString()).set({
    productID: 0,
    productBarcode: "",
    productTitle: "",
    productPreis: 0.0,
    productImageURL: "",
    productMarke: "",
    productMeasure: "",
    unitPrice: 0,
    nahrungsmittelTyp: "",
    eigenschaft: [],
    regionofOrigin: "",
    foodPrintScore: 0,
    co2Emissions: 0,
    waterUseml: 0,
    packageTyp: ""
  });
  data_counter = data_counter+1;
}
}, 5000)
//always run 1 minute if not added other parameter
if(process.argv[4] === undefined) {
  setTimeout(stopInterval, 600000)
} else {
  setTimeout(stopInterval, process.argv[4])
}

function stopInterval(){
  clearInterval(timer)
}
