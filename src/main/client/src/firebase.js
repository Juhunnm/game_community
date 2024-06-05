import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvjhc2eJnWHSb2J0fi4Ic03Jsv3_lYoxU",
    authDomain: "game-community-c21e5.firebaseapp.com",
    projectId: "game-community-c21e5",
    storageBucket: "game-community-c21e5.appspot.com",
    messagingSenderId: "72407034321",
    appId: "1:72407034321:web:9f5e01a4d271d5eb8198f0",
    measurementId: "G-85DVB1WS3Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase Auth
export const auth = getAuth(app);

// firebase db(store)
export const db = getFirestore(app);
