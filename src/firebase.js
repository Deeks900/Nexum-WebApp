
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// NOT WORKING WITH .env.local CHECK??

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }; 



const firebaseConfig = {
    apiKey: "AIzaSyBvSKIUvI2VebotAIWAcn4v8nDe3QPZd1M",
    authDomain: "project-nexum.firebaseapp.com",
    databaseURL: "https://project-nexum-default-rtdb.firebaseio.com",
    projectId: "project-nexum",
    storageBucket: "project-nexum.appspot.com",
    messagingSenderId: "787759424480",
    appId: "1:787759424480:web:4247e6acff34bed80c8185",
    measurementId: "G-6BXC563MP7"
  };



//  ------------------OLD WAY--------------------
//   const firebaseApp = firebase.initializeApp(firebaseConfig)
//   const auth = firebase.auth()
//   const provider = new firebase.auth.GoogleAuthProvider()
//   const db = firebaseApp.firestore()



// -----------------NEW WAY----------------------
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;


//const database = getDatabase(app); 


