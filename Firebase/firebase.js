import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
  // apiKey: "AIzaSyC0bWgbwItqW3LAIr4Fyi9OSYPGyYMmhj0",
  // authDomain: "epmnews1.firebaseapp.com",
  // projectId: "epmnews1",
  // storageBucket: "epmnews1.appspot.com",
  // messagingSenderId: "12500658406",
  // appId: "1:12500658406:web:3fc1977d770f7ecfd9f327",
  // measurementId: "G-W6PL87VTPR",
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

export { db };
export default firebase;
