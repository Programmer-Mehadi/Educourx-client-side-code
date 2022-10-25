// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW0IvB1EAbUyKKvIoVl0hsR6hKGeupNyQ",
  authDomain: "educourx-auth.firebaseapp.com",
  projectId: "educourx-auth",
  storageBucket: "educourx-auth.appspot.com",
  messagingSenderId: "664904855341",
  appId: "1:664904855341:web:20a6ea9e56c6feab1ceda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;