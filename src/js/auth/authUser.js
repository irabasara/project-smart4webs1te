
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "./firebase-app";

const auth = getAuth(app);
export let user = {
  name: '',
  email: '',
  isSignedIn: false,
};

export async function authUser(email,password) {
 await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const userCur = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: user.name,
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
      user.userId = userCur.uid;
      user.isSignedIn = true;
    })
    .catch(error => {
       alert(error.message)
    });
}
console.log('user', user)


