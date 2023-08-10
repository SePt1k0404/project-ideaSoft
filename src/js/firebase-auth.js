import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {getDatabase, ref, onValue, set, get} from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { closeModal } from "./modal-auth";


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
  export const auth = getAuth(app);

  export async function signUp(email, password, name, shoppingList=['default']) {
    const userCreds = await createUserWithEmailAndPassword(auth, email, password)
    .then(creds => {
      writeUsersData(creds.user.uid, email, name, shoppingList)
      closeModal()
    })
    .catch(err => {
        Notify.failure(`${err}`)
    })
  }

  export async function signIn(email, password){
    const loginUser = await signInWithEmailAndPassword(auth, email, password)
    .then(creds => {
      getUserData(creds.user.uid);
      closeModal()
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
       }
    })
  }

  export function writeUsersData(userID, email, name, shoppingList) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    const addData = set(reference, {
      userName: name, 
      email: email,
      shoppingList: shoppingList,
    })
  }

  export function userShoppingListToDb(userID, obj) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      let dataToAdd = {
        userName: data.userName, 
        email: data.email,  
        shoppingList: data.shoppingList,
      }
      dataToAdd.shoppingList.push(obj);
      const addData = set(reference, dataToAdd);
    }, {
      onlyOnce: true
    }) 
  }

  export function removeFromCart(userID, arr) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      let dataToAdd = {
        userName: data.userName, 
        email: data.email,  
        shoppingList: data.shoppingList,
      }
      arr.unshift('default')
      dataToAdd.shoppingList = arr;
      const addData = set(reference, dataToAdd);
    }, {
      onlyOnce: true
    }) 
  }

  export function removeFromDb(userID, obj) {
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      const filterData = data.shoppingList.filter(book => book.title !== obj.title);
      let dataToAdd = {
        userName: data.userName, 
        email: data.email,  
        shoppingList: filterData,
      }
      const addData = set(reference, dataToAdd);
    }, {
      onlyOnce: true
    })
  }
  
  export function getUserData(userID){
    const db = getDatabase();
    const reference = ref(db, `users/${userID}`);   
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      // userBar.textContent = data.userName;
    }) 
  }
  
  export function onLogOut(evt){
    evt.preventDefault();
    const logOut = auth.signOut();
  }

  auth.onAuthStateChanged(user => {
    if(user) {
      getUserData(user.uid)
      console.log(user);
    }
  });




