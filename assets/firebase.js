import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCPnoZh3MU7GFfpXTOWLbqinmSFHkrouW8",
  authDomain: "test-bfe91.firebaseapp.com",
  projectId: "test-bfe91",
  storageBucket: "test-bfe91.appspot.com",
  messagingSenderId: "1099237513804",
  appId: "1:1099237513804:web:fbd1aa235b15c9c93772e9"
};
const firebaseAuth = firebase.initializeApp(firebaseConfig).auth();

export default firebaseAuth;
