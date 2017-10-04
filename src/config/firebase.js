import firebase from 'firebase'

export const  db = firebase.initializeApp({
  databaseURL: 'https://vuefiredemo.firebaseio.com'
}).database()
