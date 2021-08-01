import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<AUTH_DOMAIN>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_SENDER_ID>",
    appId: "<APP_ID>"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage   = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp        = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };