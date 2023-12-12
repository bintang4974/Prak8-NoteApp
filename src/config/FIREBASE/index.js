// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBdaXCZokW1_pkmxCdCo0tlWLEjJTRc-Ww",
//     authDomain: "notes-app-a0660.firebaseapp.com",
//     projectId: "notes-app-a0660",
//     storageBucket: "notes-app-a0660.appspot.com",
//     messagingSenderId: "905495357245",
//     appId: "1:905495357245:web:246eef4682b5c4e2d7c754"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBdaXCZokW1_pkmxCdCo0tlWLEjJTRc-Ww",
    authDomain: "notes-app-a0660.firebaseapp.com",
    projectId: "notes-app-a0660",
    storageBucket: "notes-app-a0660.appspot.com",
    messagingSenderId: "905495357245",
    appId: "1:905495357245:web:246eef4682b5c4e2d7c754"
});

const FIREBASE = firebase;

export default FIREBASE;