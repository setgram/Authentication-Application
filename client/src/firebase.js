// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDxKydlsGpn3cdKHsRoubolHMZbs2Z943s",
  authDomain: "mern-stack-project-6c0c1.firebaseapp.com",
  projectId: "mern-stack-project-6c0c1",
  storageBucket: "mern-stack-project-6c0c1.appspot.com",
  messagingSenderId: "753100007744",
  appId: "1:753100007744:web:f775a52598ac72338672a5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
