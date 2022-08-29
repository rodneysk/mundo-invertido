  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCP7ROQlrZ8EJwj3ET_OA4375vG4Z48QEQ",
    authDomain: "mundo-invertido-c0326.firebaseapp.com",
    projectId: "mundo-invertido-c0326",
    storageBucket: "mundo-invertido-c0326.appspot.com",
    messagingSenderId: "688887797247",
    appId: "1:688887797247:web:026c68e28d9a8ef14383ca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app