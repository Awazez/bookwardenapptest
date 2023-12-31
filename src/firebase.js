import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';


const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const VITE_PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const VITE_STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
const VITE_MESSAGIN_SENDER_ID = import.meta.env.VITE_MESSAGIN_SENDER_ID
const VITE_APP_ID = import.meta.env.VITE_APP_ID
const VITE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGIN_SENDER_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getDatabase(firebaseApp);

export { firebaseApp, analytics,db };