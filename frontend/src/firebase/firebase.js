import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNLibscSJ8LK7df5lnUCfaDVbz1cmK3QU",
  authDomain: "ganjam-62ef9.firebaseapp.com",
  projectId: "ganjam-62ef9",
  storageBucket: "ganjam-62ef9.appspot.com",
  messagingSenderId: "287383627025",
  appId: "1:287383627025:web:e4516d8d13c4b3aeb358b0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
