import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD88oZQC416k8OYsnCIr0Mu1pxELD_u_s",
  authDomain: "crwn-clothing-5aa4b.firebaseapp.com",
  projectId: "crwn-clothing-5aa4b",
  storageBucket: "crwn-clothing-5aa4b.appspot.com",
  messagingSenderId: "911832144461",
  appId: "1:911832144461:web:b5c2fbd9a6377427db1a04",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUser = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("There was a problem registering the user", error.message);
    }
    return userDocRef;
  }
};
