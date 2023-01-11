import firebase from "firebase";
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY ,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN, 
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  });
}

// retorna o app já inicializado
export default firebase;
