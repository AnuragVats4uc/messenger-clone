import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyABVC7HDwDFqzOimdSFj6qpESGbgAw-mok",
  authDomain: "messenger-clone-ff253.firebaseapp.com",
  projectId: "messenger-clone-ff253",
  storageBucket: "messenger-clone-ff253.appspot.com",
  messagingSenderId: "277565857887",
  appId: "1:277565857887:web:4d51c0fabc71bc6ceefbea",
  measurementId: "G-VCH2717X6Q"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 6, 3);
//     }
//   }
// }