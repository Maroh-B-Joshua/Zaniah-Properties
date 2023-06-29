/** @format */

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore' 


const firebaseConfig = {
	apiKey: 'AIzaSyDUaJx322QG9ZRvsnzxWECOaYgTRNQp9vQ',
	authDomain: 'zaniah-ee398.firebaseapp.com',
	projectId: 'zaniah-ee398',
	storageBucket: 'zaniah-ee398.appspot.com',
	messagingSenderId: '1001415935843',
	appId: '1:1001415935843:web:d0887b058bd472a3a53556',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app);
export default firebase;
