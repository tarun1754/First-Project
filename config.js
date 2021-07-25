import firebase from  'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCVTRnTpWRuLjxaRFCqf-ngF83CGGWym9k",
    authDomain: "tuto-c2804.firebaseapp.com",
    projectId: "tuto-c2804",
    storageBucket: "tuto-c2804.appspot.com",
    messagingSenderId: "672017476461",
    appId: "1:672017476461:web:4b720647443d7a20304864",
    measurementId: "G-YGBHDRT9E6"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();