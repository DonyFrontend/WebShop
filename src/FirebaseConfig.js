// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { collection } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2R8bFsSf-SXhNd2DvMaiHxaoBmDgk_JM",
  authDomain: "webshop-9ef92.firebaseapp.com",
  projectId: "webshop-9ef92",
  storageBucket: "webshop-9ef92.appspot.com",
  messagingSenderId: "670230415263",
  appId: "1:670230415263:web:07f4a585725937f4965faa",
  measurementId: "G-SE1X95DX0Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//collections
export const productsCollectionRef = collection(db, 'products');
export const basketCollectionRef = collection(db, 'basket');
export const wishlistCollectionRef = collection(db, 'wishlist');
export const usersCollectionRef = collection(db, 'users');
export const sortProductsCollectionRef = collection(db, 'sortProducts');
export const chatProductsCollectionRef = collection(db, 'chat');

//auth
export const auth = getAuth(app);