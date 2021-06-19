import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoi-R3vMvop8T2mhmplJkF2uNfYRZhm7g",
    authDomain: "clone-efe22.firebaseapp.com",
    projectId: "clone-efe22",
    storageBucket: "clone-efe22.appspot.com",
    messagingSenderId: "953990032433",
    appId: "1:953990032433:web:e278c6ea15c4829bf97910",
    measurementId: "G-P7XG99SCVF"
    };

    const firebaseApp=firebase.initializeApp(firebaseConfig);

    const db =firebaseApp.firestore();
    const auth=firebase.auth();

    export {db,auth};