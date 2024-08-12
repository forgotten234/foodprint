
var firebaseConfig = {
    apiKey: "AIzaSyDQCN5wNU7cz3PRW3hyq4u014bsoVgsXrU",
    authDomain: "foodprint-htw-berlin-de.firebaseapp.com",
    databaseURL: "https://foodprint-htw-berlin-de.firebaseio.com",
    projectId: "foodprint-htw-berlin-de",
    storageBucket: "foodprint-htw-berlin-de.appspot.com",
    messagingSenderId: "587915422534",
    appId: "1:587915422534:web:60a63a25a67a50d6005347",
    measurementId: "G-SJNE62LQ5W"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)





function readImage(){

    var file =  document.getElementById("photoId").files[0]
    var img =document.getElementById("imageId")

    const reader = new FileReader()
    
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      img.src = reader.result
    }, false)
  
    if (file) {
      reader.readAsDataURL(file)
    }
}
async function upload(){
    var file =  document.getElementById("photoId").files[0]
    var storage = firebase.app().storage()
    
   // Create a root reference
    var storageRef = storage.ref()
    var metadata = {
     contentType: file.type,
    }


    const task =storageRef.child("images/" +file.name).put(file, metadata)
    task.then( result=>
        alert("Image uploaded..")
        )
}

