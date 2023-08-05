
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase-app";

const auth = getAuth(app);
let user = {
  name: '',
  email: '',
  password: '',
  photoUrl: '../../img/sprite.svg#icon-user',
  isSignedIn: false,
  booksArr: [],
  bookDataArr: [],
};

export async function authUser(email,password) {
 await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const userCur = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: user.name,
        photoURL: user.photoUrl,
      })
      user.userId = userCur.uid;
      user.isSignedIn = true;
    
    })
    .catch(error => {
       alert(error.message)
    });
}  

export async function signInUser(email,password) {
 await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const userCur = userCredential.user;
      user.name = userCur.displayName;
      user.photoUrl = userCur.photoURL;
      user.userId = userCur.uid;
      user.isSignedIn = true;
    })
    .catch(error => {
       alert(error.message)
    });
}


