const fetch = require("node-fetch");
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true })
var data_counter = 0;
var allProducts = []
async function getData(){
  const response = await fetch('https://www.foodrepo.org/api/v3/products?page%5Bsize%5D=200', {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      "Authorization": "Token token=8b7772bb521dd6a8eeddf3c3d436488c"
    }
  })
  .then(response => response.json())
  .then(json => {
    json.data.forEach(obj => {
      allProducts.push({
        productID: obj.id,
        productBarcode: obj.barcode,
        productTitle: obj.name_translations.de,
        productPreis: 0.0,
        productImageURL: obj.images[0].medium,
        productMarke: "",
        productMeasure: obj.quantity,
        unitPrice: 0,
        nahrungsmittelTyp: "",
        eigenschaft: [],
        regionofOrigin: obj.country,
        foodPrintScore: -7,
        co2Emissions: 0,
        waterUseml: 0,
        packageTyp: ""
      })
    })
  })
}
getData()
setTimeout(function(){
  setInterval(function(){
    if(data_counter === 200){
      return;
    } else {
      db.collection('foodRepoProducts').doc(data_counter.toString()).set(allProducts[data_counter]);
      data_counter = data_counter+1;
    }
  }, 5000)
},60000)
