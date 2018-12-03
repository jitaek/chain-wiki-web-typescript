import * as firebase from 'firebase/app';
require('firebase/database');
require('firebase/firestore');
require('firebase/functions');

var useTestConfig = false;
var config;
if (useTestConfig) {
    config = {
        apiKey: "AIzaSyBzl0p1jpmVi5sf8lywgJNCTWex0lAQTmw",
        databaseURL: "https://firestore-test-646f4.firebaseio.com",
        projectId: "firestore-test-646f4",
    };
}
else {
    config = {
        apiKey: "AIzaSyBD9eX7ABB0Xu1N6CnSdKL-bnsNF5WgLtc",
        // authDomain: "chainchronicle-ea233.firebaseapp.com",
        databaseURL: "https://chainchronicle-ea233.firebaseio.com",
        projectId: "chainchronicle-ea233",
        storageBucket: "chainchronicle-ea233.appspot.com",
        messagingSenderId: "1008757887866"
    };
}

firebase.initializeApp(config);

const functions = firebase.functions();

var isTestEnvironment;
if (location.hostname === 'localhost') {
    isTestEnvironment = true;
    functions.useFunctionsEmulator("http://localhost:5000");
}
else {
    isTestEnvironment = false;
}

export const FUNCTIONS = functions;
export const BASE_REF = firebase.database().ref();
export const ARCANA_REF = BASE_REF.child('arcana');
export const DYNAMIC_LINK = 'https://q623s.app.goo.gl/';

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export const BASE_STORE_REF = db;

export const IS_TEST_ENVIRONMENT = isTestEnvironment;

export const GAKEY = 'UA-70981211-1';

