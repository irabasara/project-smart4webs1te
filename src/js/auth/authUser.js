import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { app } from "./firebase-app";
import { Notify, Report } from "notiflix";
import { userProfile } from "./user-profile";
import { closeModal } from "../modal";

const notifyOption = {
  position:'center-top',
}
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
    Notify.success(`New user ${user.name} created`,notifyOption);
    })
   
   .catch(error => {
     if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
       Notify.failure('this user is already regulated', notifyOption);
     } else {
        Notify.failure(error.message, notifyOption)
     }
   });
  if(user.isSignedIn)closeModal()
  
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
       Notify.success(`Sign in is succses, ${user.name} `,notifyOption);
    })
   .catch(error => {
         Report.failure('wrong password or email',notifyOption)
   });
  if(user.isSignedIn)closeModal()
  
}

export async function logOutUser() {
  await signOut(auth).then(() => {
      user.isSignedIn = false;
      localStorage.removeItem('USER')
      Notify.success(`Sign-out successful`,notifyOption);
  }).catch((error) => {
    Notify.failure(error.message,notifyOption)
});
}



