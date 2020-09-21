import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCwwdEFmva0MEjhdZio3oDVTsOLfdTskA",
    authDomain: "clone-38a84.firebaseapp.com",
    databaseURL: "https://clone-38a84.firebaseio.com",
    projectId: "clone-38a84",
    storageBucket: "clone-38a84.appspot.com",
    messagingSenderId: "811831984980",
    appId: "1:811831984980:web:98a680fe5ba0252c567ec1",
    measurementId: "G-5QGXV68Y7W"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};