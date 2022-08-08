import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDe5l97S2-EFZeDF4Q8vkRE374SNBbUaCE',
  authDomain: 'house-marketplace-app-ec788.firebaseapp.com',
  projectId: 'house-marketplace-app-ec788',
  storageBucket: 'house-marketplace-app-ec788.appspot.com',
  messagingSenderId: '601682201611',
  appId: '1:601682201611:web:a251ea258e7dabaa270b0e',
  measurementId: 'G-YMJE6BCXSS',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
