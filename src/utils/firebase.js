// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBkuzpdFyunD_qV7kHQekQjdW_KEYhOx0",
    authDomain: "netflix-clone-1fefc.firebaseapp.com",
    projectId: "netflix-clone-1fefc",
    storageBucket: "netflix-clone-1fefc.appspot.com",
    messagingSenderId: "38389296686",
    appId: "1:38389296686:web:e95d8f16e68fc97a2a39bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initiation authentication

const auth = getAuth(app);

//to add new user
export const createUser =async(email,password)=>{
    try{
        const rsp = await createUserWithEmailAndPassword(auth,email,password);
        console.log(rsp);
    }catch(error){
        return error.message;
    }
}

// sign in function
export const signInFn = async(email,password)=>{
    try{
        const rsp = await signInWithEmailAndPassword(auth,email,password)
        console.log(rsp)
        return rsp
    }catch(error){
        return error.message;
    }
}

//user listner function

export const onAuthStateChangedListner=(callback)=>{
    onAuthStateChanged(auth,callback);
}
//sign out fn

export const signOutFn=async()=>{
    try{
        const rsp = await signOut(auth);
        console.log(rsp)
    }catch(error){
        return error.message;
    }
}