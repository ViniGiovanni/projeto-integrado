import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCprp8fZUA9VIQhznz4qBdUv6FM5D3IGvI",
    authDomain: "projeto-integrado-faa8e.firebaseapp.com",
    projectId: "projeto-integrado-faa8e",
    storageBucket: "projeto-integrado-faa8e.appspot.com",
    messagingSenderId: "715070818467",
    appId: "1:715070818467:web:a3cb2bcdcaf6af6c3cd716",
    measurementId: "G-43XTSHJYZ6"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;