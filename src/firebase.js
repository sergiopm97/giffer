import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpsKbfEGwXGWMNK6Ey73pfGOp5XsxzbqA",
  authDomain: "giffer-cloud.firebaseapp.com",
  projectId: "giffer-cloud",
  storageBucket: "giffer-cloud.appspot.com",
  messagingSenderId: "459814209746",
  appId: "1:459814209746:web:b675c8c10505e8268d450b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
