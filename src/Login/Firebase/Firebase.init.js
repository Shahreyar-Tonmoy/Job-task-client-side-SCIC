// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBNRjQht9dnGk0EstUW74NDwk_QW82Mas",
  authDomain: "job-task-scic.firebaseapp.com",
  projectId: "job-task-scic",
  storageBucket: "job-task-scic.appspot.com",
  messagingSenderId: "488908134332",
  appId: "1:488908134332:web:79b3869322b838e1f77db9",
  measurementId: "G-87GQ625H3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
