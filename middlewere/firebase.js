// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoOrOdaOfLVzLxWskwK8xaqcgl3tWEW90",
    authDomain: "bestapp-77a89.firebaseapp.com",
    projectId: "bestapp-77a89",
    storageBucket: "bestapp-77a89.appspot.com",
    messagingSenderId: "514567021122",
    appId: "1:514567021122:web:dbc879a8f0a640017c83db",
    measurementId: "G-JR7508Q4H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};