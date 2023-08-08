import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
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
  // const analytics = getAnalytics(app);
  const auth = getAuth(app);
  let userAuthTracking = {};


  export async function signUp(email, password, name, shoppingList={foo: 2}) {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password)
    .then(creds => writeUsersData(creds.user.uid, email, name, shoppingList))
    .catch(err => {
        Notify.failure(`${err}`)
    })
  }

  export async function signIn(email, password){
    const loginUser = await signInWithEmailAndPassword(auth, email, password)
    .then(creds => {
      getUserData(creds.user.uid);
    })
    .catch(err => {
          if(err.code.match(/password/)){
      Notify.failure("Enter correct password!")
      }
      else if(err.code.match(/found/)){
      Notify.failure('User not found!')
      }
       else {
        Notify.failure(`${err}`)
        console.log(err.code);
       }
    })
  }

  export function writeUsersData(userID, email, name, shoppingList={foo: 2}) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    const addData = set(reference, {
      userName: name, 
      email: email,
      shoppingList: shoppingList,
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
  
  export function onLogOut(evt){
    evt.preventDefault();
    const logOut = auth.signOut();
    console.log("logOut");
  }

  onAuthStateChanged(auth, user => {
    console.log(user);
  });

// const authCheck = onAuthStateChanged(auth, user => {
//   return user
// });


