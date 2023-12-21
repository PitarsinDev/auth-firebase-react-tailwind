// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7o8H_VyyaoQEBc03iXfJlKOpRcI3ia8",
  authDomain: "kaerz-469dc.firebaseapp.com",
  databaseURL: "https://kaerz-469dc-default-rtdb.firebaseio.com",
  projectId: "kaerz-469dc",
  storageBucket: "kaerz-469dc.appspot.com",
  messagingSenderId: "953773748783",
  appId: "1:953773748783:web:ed38e02ea6382828580cda",
  measurementId: "G-2V31ZFNQ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;