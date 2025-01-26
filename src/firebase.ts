// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDS1AhFkPuzTlc6d2zrsgHewi42YGXsNP8",
    authDomain: "cappsconsult-19f13.firebaseapp.com",
    projectId: "cappsconsult-19f13",
    storageBucket: "cappsconsult-19f13.firebasestorage.app",
    messagingSenderId: "807488660320",
    appId: "1:807488660320:web:510a2e0586dfedda3bb405",
    measurementId: "G-KLNQJ7G3T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };