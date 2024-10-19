import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDP7CTrKDbJDhpXqSAznYhhZJR7LnedpJ8",
    authDomain: "dtask-5ff5c.firebaseapp.com",
    projectId: "dtask-5ff5c",
    storageBucket: "dtask-5ff5c.appspot.com",
    messagingSenderId: "587772539864",
    appId: "1:587772539864:web:05dd4de9fa9fcc81ddb8ad"
};

const app = initializeApp(firebaseConfig);

// Firestore and Storage references
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
