// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "commerce-app-ebe6d.firebaseapp.com",
  databaseURL:
    "https://commerce-app-ebe6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "commerce-app-ebe6d",
  storageBucket: "commerce-app-ebe6d.appspot.com",
  messagingSenderId: "831863571283",
  appId: "1:831863571283:web:76baf7ae6ce3dbd69117a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
