// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbJB4m7pr0QhN6vRqrgct55UoIMc88JPY",
  authDomain: "creative-hub-bandung.firebaseapp.com",
  projectId: "creative-hub-bandung",
  storageBucket: "creative-hub-bandung.appspot.com",
  messagingSenderId: "1070086517766",
  appId: "1:1070086517766:web:e1ddfa2b67048772e77f87",
  measurementId: "G-PMEKRG05DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)