// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqouoZgkxsi285gRdRQeBAiPNZoxEOX0",
  authDomain: "movies-nextjs-9c97b.firebaseapp.com",
  projectId: "movies-nextjs-9c97b",
  storageBucket: "movies-nextjs-9c97b.appspot.com",
  messagingSenderId: "867093153190",
  appId: "1:867093153190:web:a88306a1ffb7c30a05bb67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app