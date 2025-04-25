  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js'
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBK1C8kr7P3NZel9MxauvF-GWiebm1jgQc",
    authDomain: "e-commerce-c3a05.firebaseapp.com",
    projectId: "e-commerce-c3a05",
    storageBucket: "e-commerce-c3a05.firebasestorage.app",
    messagingSenderId: "533414333162",
    appId: "1:533414333162:web:f30d7fc52bc7be6bd76593",
    measurementId: "G-RZVZ66XDTR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export{auth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword }

//   const analytics = getAnalytics(app);
