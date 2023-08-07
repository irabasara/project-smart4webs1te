import { initializeApp } from "firebase/app";
// import { getDatabase,ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDT1NerO3LRo9vVz3KFEnYeF74w8CzteoM",
  authDomain: "books-app-goit.firebaseapp.com",
  databaseURL: "https://books-app-goit-default-rtdb.firebaseio.com",
  projectId: "books-app-goit",
  storageBucket: "books-app-goit.appspot.com",
  messagingSenderId: "634156543258",
  appId: "1:634156543258:web:19b86f7e6c8fe5af6450a3"
};

export const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }