import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAczZjUsDwse_K-vHtuzrAqqVDqNfEDBwY",
    authDomain: "elements-343d3.firebaseapp.com",
    databaseURL: "https://elements-343d3.firebaseio.com",
    projectId: "elements-343d3",
    storageBucket: "elements-343d3.appspot.com",
    messagingSenderId: "552299818572",
    appId: "1:552299818572:web:212fddbbc20d211f888ee9",
    measurementId: "G-HHJTF93DD1"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
