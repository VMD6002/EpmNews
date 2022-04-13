import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
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
