import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBu7WbHV2rMErZ2kLVxKW-f13paWAfzgEg',
  authDomain: 'svelte-19dfb.firebaseapp.com',
  projectId: 'svelte-19dfb',
  storageBucket: 'svelte-19dfb.appspot.com',
  messagingSenderId: '1061994214268',
  appId: '1:1061994214268:web:796a7a58e6a98c1c0f2af9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
