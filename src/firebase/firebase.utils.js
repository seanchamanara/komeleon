import firebase from 'firebase/app';


//database
import 'firebase/firestore';

//authentication
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


export const createUserProfileDocument = async (userAuth, additionalData) => {

 
    if(!userAuth) return;
    

    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

   
    const snapShot = await userRef.get();
    // console.log(snapShot)

    //if user does not exsit create new userRef profile
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }

    }

    //returning new userRef "user"
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;