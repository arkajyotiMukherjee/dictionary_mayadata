import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDAxH9JIApaylr7ZLm4LjKEn9Wk5iF2L9k',
  authDomain: 'dictionary-mayadata.firebaseapp.com',
  databaseURL: 'https://dictionary-mayadata.firebaseio.com',
  projectId: 'dictionary-mayadata',
  storageBucket: 'dictionary-mayadata.appspot.com',
  messagingSenderId: '368518779305',
  appId: '1:368518779305:web:dc500015f13f9a834734b8',
  measurementId: 'G-761TBQLW3F',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
