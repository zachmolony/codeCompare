import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyBPGTdRjQRj8pPtZB5_VOj3htc5TVy7EfU",
      authDomain: "codecompare-5a70a.firebaseapp.com",
      databaseURL: "https://codecompare-5a70a.firebaseio.com",
      projectId: "codecompare-5a70a",
      storageBucket: "codecompare-5a70a.appspot.com",
      messagingSenderId: "1047624151109",
      appId: "1:1047624151109:web:172e1619b1af003e56b32c",
      measurementId: "G-14K5SCTSRY"
    };
    firebase.initializeApp(firebaseConfig)
    firebase.firestore().settings({timestampsInSnapshots: true})
}

const fireDb = firebase.firestore()
export {fireDb}