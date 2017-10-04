import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB5bRzdULwXTfQA67Yw5sP9-hkD7GSkA4g",
  authDomain: "loginfirebasevue.firebaseapp.com",
  databaseURL: "https://loginfirebasevue.firebaseio.com",
  projectId: "loginfirebasevue",
  storageBucket: "loginfirebasevue.appspot.com",
  messagingSenderId: "678155794101"
};

export const db = firebase.initializeApp(config).database()

export const provider = new firebase.auth.GoogleAuthProvider()

export const auth = new firebase.auth()
