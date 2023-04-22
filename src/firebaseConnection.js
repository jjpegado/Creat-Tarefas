import { initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA1k2g8JqWQSB57WoIy0fo6wzB1bEeTrjY",
    authDomain: "curso-b6a90.firebaseapp.com",
    projectId: "curso-b6a90",
    storageBucket: "curso-b6a90.appspot.com",
    messagingSenderId: "935923562938",
    appId: "1:935923562938:web:0618c1b3754fd53fb5c583",
    measurementId: "G-H61MP8JZVP"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db,auth };