  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtOv00gAYCGOrx2qG610whWNS-XYOSQ8Q",
    authDomain: "udemy-proj-sophie.firebaseapp.com",
    databaseURL: "https://udemy-proj-sophie.firebaseio.com",
    projectId: "udemy-proj-sophie",
    storageBucket: "udemy-proj-sophie.appspot.com",
    messagingSenderId: "580396923445",
    appId: "1:580396923445:web:7a6f22992b7c42752c0f7c",
    measurementId: "G-Y82NE7CP1J"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // export firestore database
  export default firebaseApp.firestore()