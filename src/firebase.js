// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuqSi6zd58orSGBCPhUUPUyJaB9pYV2Sg",
  authDomain: "chat-app-a6407.firebaseapp.com",
  projectId: "chat-app-a6407",
  storageBucket: "chat-app-a6407.appspot.com",
  messagingSenderId: "368968722705",
  appId: "1:368968722705:web:a2c0fb68f4161ef88704b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)