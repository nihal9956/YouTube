import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEyD7VsBb80I7Vkx2pV3cEwzppeu8sDYo",
    authDomain: "fir-aaf1e.firebaseapp.com",
    databaseURL: "https://fir-aaf1e.firebaseio.com",
    projectId: "fir-aaf1e",
    storageBucket: "fir-aaf1e.appspot.com",
    messagingSenderId: "348280260594",
    appId: "1:348280260594:web:5692266079c6e3d3100d6b",
    measurementId: "G-0XLY1R5NB3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider}