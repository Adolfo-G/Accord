import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQahmSHoN76ypVRWHln1iu35Pp1hYXNRY",
    authDomain: "accord-75780.firebaseapp.com",
    projectId: "accord-75780",
    storageBucket: "accord-75780.appspot.com",
    messagingSenderId: "701966469016",
    appId: "1:701966469016:web:f6508cd13ac2ae66710ded"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;