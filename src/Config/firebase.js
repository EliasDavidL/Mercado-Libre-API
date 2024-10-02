import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBRZ7JtNK6JDgTUFCzjb4mCc1RfunjHfNc",
    authDomain: "mltp2023.firebaseapp.com",
    projectId: "mltp2023",
    storageBucket: "mltp2023.appspot.com",
    messagingSenderId: "1064633667291",
    appId: "1:1064633667291:web:b9857a1f5ac8f8ec8b46fe"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase