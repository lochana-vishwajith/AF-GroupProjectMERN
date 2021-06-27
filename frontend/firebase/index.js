import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfwvMHYrsp2uGp1wHVHPWXIWW8r8e_jTA",
  authDomain: "icaf-storage-c23a0.firebaseapp.com",
  projectId: "icaf-storage-c23a0",
  storageBucket: "icaf-storage-c23a0.appspot.com",
  messagingSenderId: "854087654213",
  appId: "1:854087654213:web:606bcdf35d59e8166ffc2c",
  measurementId: "G-C5MVXGNQKF",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
