import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhjzpYWCXAkyZUpudc3luExIws7koBNao",
  authDomain: "slack-clone-32491.firebaseapp.com",
  projectId: "slack-clone-32491",
  storageBucket: "slack-clone-32491.appspot.com",
  messagingSenderId: "454603421581",
  appId: "1:454603421581:web:34c915675b07ece3e2afc4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
