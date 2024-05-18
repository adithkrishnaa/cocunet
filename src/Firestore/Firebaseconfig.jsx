import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArVBLeKMSAyU_JsoTKg2LkMXOKd-TbKDA",
  authDomain: "ecommerce-ac930.firebaseapp.com",
  projectId: "ecommerce-ac930",
  storageBucket: "ecommerce-ac930.appspot.com",
  messagingSenderId: "78491714030",
  appId: "1:78491714030:web:84fd5a0c640452f8a34eff",
  measurementId: "G-3EVEKPPV92",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
