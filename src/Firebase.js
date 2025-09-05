import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA7zx9yX0tfTG-YUXPKtYxjjLVLOexoT4k",
    authDomain: "crus-app-9dff0.firebaseapp.com",
    projectId: "crus-app-9dff0",
    storageBucket: "crus-app-9dff0.firebasestorage.app",
    messagingSenderId: "469103417797",
    appId: "1:469103417797:web:0627c101ca5cca72cb93ac",
    measurementId: "G-3SR576C5Q2",
    databaseURL: "https://crus-app-9dff0-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
