import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3W2kbvYkm-ZHxVr5mVuN5KUpvsbcU3sc",
  authDomain: "fir-react-549d9.firebaseapp.com",
  projectId: "fir-react-549d9",
  storageBucket: "fir-react-549d9.appspot.com",
  messagingSenderId: "713881030162",
  appId: "1:713881030162:web:8b1e185a68bb693aaa92cb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
