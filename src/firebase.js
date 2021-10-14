
import firebase from "firebase";






  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnrHKKyx-s-A92ulSPerqk6FvE8umlhpU",
    authDomain: "linkedin-clone-22571.firebaseapp.com",
    projectId: "linkedin-clone-22571",
    storageBucket: "linkedin-clone-22571.appspot.com",
    messagingSenderId: "128794292572",
    appId: "1:128794292572:web:e77d6779c077b3c693d199"
  });

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();

  

  export {auth, provider, storage};

  export default db;

