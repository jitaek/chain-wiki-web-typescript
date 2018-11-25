import * as firebase from 'firebase/app';
require('firebase/database');

const config = {
    apiKey: "AIzaSyBD9eX7ABB0Xu1N6CnSdKL-bnsNF5WgLtc",
    authDomain: "chainchronicle-ea233.firebaseapp.com",
    databaseURL: "https://chainchronicle-ea233.firebaseio.com",
    projectId: "chainchronicle-ea233",
    storageBucket: "chainchronicle-ea233.appspot.com",
    messagingSenderId: "1008757887866"
  };

firebase.initializeApp(config);

var isTestEnvironment;
if (location.hostname === 'localhost') {
    isTestEnvironment = true;
}
else {
    isTestEnvironment = false;
}

export const BASE_REF = firebase.database().ref();
export const ARCANA_REF = BASE_REF.child('arcana');
export const DYNAMIC_LINK = 'https://q623s.app.goo.gl/';

export const IS_TEST_ENVIRONMENT = isTestEnvironment;

export const GAKEY = 'UA-70981211-1';

