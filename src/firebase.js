import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBQN1ISZ-A1FofoF-DDIMnN2VuAz55soZs",
  authDomain: "disney-plus-873c4.firebaseapp.com",
  projectId: "disney-plus-873c4",
  storageBucket: "disney-plus-873c4.appspot.com",
  messagingSenderId: "213188779994",
  appId: "1:213188779994:web:35a2ac51059c1662616ae3",
  measurementId: "G-J8F6H1Z8C2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
