import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyC_8B4gOUGvTZSKwBK05gL-0AQGA4OTFSE",
    authDomain: "linkedin-clone-1e26b.firebaseapp.com",
    projectId: "linkedin-clone-1e26b",
    storageBucket: "linkedin-clone-1e26b.appspot.com",
    messagingSenderId: "792963887854",
    appId: "1:792963887854:web:f63f07e35ecd8a60d379ff"
  };

  var firebaseApp = firebase.initializeApp(Config);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export { db , auth};