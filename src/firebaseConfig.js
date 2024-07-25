import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAw9g0yDLMXD9yaXoc28YN3S51iuOk79oM",
    authDomain: "costream-4720d.firebaseapp.com",
    databaseURL: "https://costream-4720d-default-rtdb.firebaseio.com",
    projectId: "costream-4720d",
    storageBucket: "costream-4720d.appspot.com",
    messagingSenderId: "616611117861",
    appId: "1:616611117861:web:031a8a75d8aef7d234f8cc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app)

export { database }