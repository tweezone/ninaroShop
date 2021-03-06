import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const  config = {
    apiKey: "AIzaSyC7dkE9g7o9w73lS8328MwOTCf4kEx_Kbg",
    authDomain: "crwn-db-6e69b.firebaseapp.com",
    projectId: "crwn-db-6e69b",
    storageBucket: "crwn-db-6e69b.appspot.com",
    messagingSenderId: "223151294360",
    appId: "1:223151294360:web:50d80cef5ed7a25b43cded",
    measurementId: "G-JRZEJD36PD"
  };
  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      if(!userAuth) return;
      const userRef  = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                 email,
                createdAt,
                ...additionalData    
            });

        }catch(error){
            console.log('error creating user', error.message);
        }
       

     }
     return userRef;

  }
  export const auth= firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;