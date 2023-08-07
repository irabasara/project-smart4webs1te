
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { app } from "./firebase-app";
import { Notify } from "notiflix";
import { addNewMarkup } from "../header";

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
  localStorage.setItem('USER_NAME', JSON.stringify(user))
    Notify.success(`New user ${user.name} created`);
    })
      addNewMarkup(user.isSignedIn)
   
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
      addNewMarkup(user.isSignedIn)
       Notify.success(`Sign in is succses, ${user.name} `);
    })
    .catch(error => {
       alert(error.message)
    });
}

export async function logOutUser() {
  await signOut(auth).then(() => {
      user.isSignedIn = false;
      // menusToggleOnAuth();
      // removeLS(LOGINKEY);
      // removeLS(LOCALKEY);
      Notify.success(`Sign-out successful`);
      // return true;
    }).catch((error) => {
  alert(error.message)
});
}



