// utils/firebaseConfig.js
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-QphqI7Mjj5aHj107Gnk_7BgpF3ubcG0",
  authDomain: "drivemetrics-55d3e.firebaseapp.com",
  projectId: "drivemetrics-55d3e",
  storageBucket: "drivemetrics-55d3e.appspot.com",
  messagingSenderId: "48700035528",
  appId: "1:48700035528:web:a5b4a21da64339245130fd",
  measurementId: "G-5Z1QZSKTWH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth };
