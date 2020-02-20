import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7RjnupTvqEvHsxf8cQHoDOMOjdOFy1HA",
    authDomain: "komeleon-db.firebaseapp.com",
    databaseURL: "https://komeleon-db.firebaseio.com",
    projectId: "komeleon-db",
    storageBucket: "komeleon-db.appspot.com",
    messagingSenderId: "645681682472",
    appId: "1:645681682472:web:4bc7568af58761a7b57d1d",
    measurementId: "G-VHJ18VKT57"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;