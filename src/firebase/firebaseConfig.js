import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbsSWyHuX1ja8HdluJHdejEnhYX5yKm6E",
  authDomain: "app-login-public.firebaseapp.com",
  projectId: "app-login-public",
  storageBucket: "app-login-public.appspot.com",
  messagingSenderId: "1032995570505",
  appId: "1:1032995570505:web:bd636e74eb26e3b188d098"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
  db,
  firebase
}

 
