// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.ACCESS_KEY_apiKey,
    authDomain: process.env.ACCESS_KEY_authDomain,
    projectId: process.env.ACCESS_KEY_projectId,
    storageBucket: process.env.ACCESS_KEY_storageBucket,
    messagingSenderId: process.env.ACCESS_KEY_messagingSenderId,
    appId: process.env.ACCESS_KEY_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;