import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAYxgza1Kk0OFBW9ciRpKNXbeUJCDxB3N4",
    authDomain: "twitter-clone-with-kazimotiour.firebaseapp.com",
    databaseURL: "https://twitter-clone-with-kazimotiour.firebaseio.com",
    projectId: "twitter-clone-with-kazimotiour",
    storageBucket: "twitter-clone-with-kazimotiour.appspot.com",
    messagingSenderId: "1024390940820",
    appId: "1:1024390940820:web:c4f091e90b3f3f748a8c81",
    measurementId: "G-6XBZ1HWM80"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;