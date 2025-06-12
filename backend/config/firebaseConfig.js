const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'ganjam-62ef9.appspot.com',
});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };


// const admin = require('firebase-admin');
// const serviceAccount = require('../serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// module.exports = { admin };
