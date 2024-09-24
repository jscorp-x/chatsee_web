import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhZGPvkHib0VyUJdxgArsOV2cZ6dMNapc",
    authDomain: "chat-stories-84643.firebaseapp.com",
    projectId: "chat-stories-84643",
    storageBucket: "chat-stories-84643.appspot.com",
    messagingSenderId: "1059425604876",
    appId: "1:1059425604876:web:4ea9ab174465438ef9a529",
    measurementId: "G-LV93734C8S"
  };

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

