/*

Initializing firebase

productionConfig => config for production
developmentConfig => config for development

Used so that you never mix up data from development mode and production mode

*/
import firebase from 'firebase';
require("firebase/firestore");

const productionConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const developmentConfig = {
    apiKey: "AIzaSyBgnHd6l-2ZvK-5kDwBhKKuRoRQeWsgxbs",
    authDomain: "dubdev-61e89.firebaseapp.com",
    databaseURL: "https://dubdev-61e89.firebaseio.com",
    projectId: "dubdev-61e89",
    storageBucket: "dubdev-61e89.appspot.com",
    messagingSenderId: "1013066270717"
};

const config = process.env.NODE_ENV === 'production'
    ? productionConfig
    : developmentConfig

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var db = firebase.firestore();

export { db }