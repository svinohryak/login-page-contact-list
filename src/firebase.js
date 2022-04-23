import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdRWiFuXQYJ2Yu8OEFootWOIiTfX4ebFc",
  authDomain: "login-page-contact-list.firebaseapp.com",
  projectId: "login-page-contact-list",
  storageBucket: "login-page-contact-list.appspot.com",
  messagingSenderId: "538115387977",
  appId: "1:538115387977:web:9eb2330cd85698df714598",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
