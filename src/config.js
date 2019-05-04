import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA9DcBzA0nSyLvQ9ogcX7lhL0Hj_GZNOZM",
    authDomain: "cs411-new.firebaseapp.com",
    databaseURL: "https://cs411-new.firebaseio.com",
    projectId: "cs411-new",
    storageBucket: "cs411-new.appspot.com",
    messagingSenderId: "560213654582",
    appId: "1:560213654582:web:4cbf4d7fac53cae9"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();
export default auth;