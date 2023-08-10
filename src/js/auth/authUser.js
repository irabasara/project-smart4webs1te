
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { app } from "./firebase-app";
import { Notify } from "notiflix";
import { userProfile } from "./user-profile";

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
      localStorage.setItem('USER', JSON.stringify(user))
      userProfile(user.name)
    Notify.success(`New user ${user.name} created`);
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
      localStorage.setItem('USER', JSON.stringify(user))
      userProfile(user.name)
       Notify.success(`Sign in is succses, ${user.name} `);
    })
   .catch(error => {
      console.log('error', error)
       alert(error.message)
    });
}

export async function logOutUser() {
  await signOut(auth).then(() => {
      user.isSignedIn = false;
      localStorage.removeItem('USER')
      Notify.success(`Sign-out successful`);
  }).catch((error) => {
      console.log('error', error)
  alert(error.message)
});
}



