import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwrlrRpXjNw43FTr0KStT3XR7efDXrxGA",
  authDomain: "m-d-s-project.firebaseapp.com",
  projectId: "m-d-s-project",
  storageBucket: "m-d-s-project.appspot.com",
  messagingSenderId: "882999846692",
  appId: "1:882999846692:web:9b3bd1b6fd77661e72b5b1",
  measurementId: "G-2XYZFK20NP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);