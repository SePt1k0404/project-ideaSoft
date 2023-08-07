import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, onValue, set} from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const firebaseConfig = {
    apiKey: "AIzaSyDOWLvmPX39pGJhfraei4tUeHfmUwbVC-0",
    authDomain: "bookshelf-a9436.firebaseapp.com",
    databaseURL: "https://bookshelf-a9436-default-rtdb.firebaseio.com/",
    projectId: "bookshelf-a9436",
    storageBucket: "bookshelf-a9436.appspot.com",
    messagingSenderId: "437187847892",
    appId: "1:437187847892:web:95ea6eb6d47f19a5aabd41",
    measurementId: "G-NCBCGHBXVZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  export async function signUp(email, password) {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password)
    .then(creds => writeUsersData(creds.user.uid, email, password))
    .catch(err => {
        Notify.failure(`${err}`)
    })
  }

  export async function signIn(email, password){
    const loginUser = await signInWithEmailAndPassword(auth, email, password)
    .then(creds => {
      getUserData(creds.user.uid);
      console.log(creds);
    })
    .catch(err => {
        Notify.failure(`${err}`)
    })
  }

  export function writeUsersData(userID, name, email) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    const addData = set(reference, {
      userName: name, 
      email: email,
    })
    console.log(reference);
  }
  
  export function getUserData(userID){
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);   
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    }) 
  }
  
