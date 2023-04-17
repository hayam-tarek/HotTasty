// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCBWeJeT4uoVooDgUSu-arc6hRz6R7luA",
    authDomain: "firstrn-57493.firebaseapp.com",
    projectId: "firstrn-57493",
    storageBucket: "firstrn-57493.appspot.com",
    messagingSenderId: "919179910253",
    appId: "1:919179910253:web:08a79affc7de0dceb03364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;