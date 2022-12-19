var admin = require("firebase-admin");

var serviceAccount = require("../adminKey.json");
// var serviceAccount = require("../uthkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports={db}


