// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDniJnflb6oEmbqA71BxnkypMAHteAB3uQ",
    authDomain: "intigrationparivaterout-ph1.firebaseapp.com",
    projectId: "intigrationparivaterout-ph1",
    storageBucket: "intigrationparivaterout-ph1.appspot.com",
    messagingSenderId: "370739520097",
    appId: "1:370739520097:web:42fc35d8e3565392f44020",
    measurementId: "G-F4B5YCEF02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;