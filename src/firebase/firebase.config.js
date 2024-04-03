// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcKmtr_iQKnbqxFxHjcY_epmTcDGy3zPA",
  authDomain: "dragon-news-1b20d.firebaseapp.com",
  projectId: "dragon-news-1b20d",
  storageBucket: "dragon-news-1b20d.appspot.com",
  messagingSenderId: "197247024418",
  appId: "1:197247024418:web:da675ec18f2dce5d62797b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
