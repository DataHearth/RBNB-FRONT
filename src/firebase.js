import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0LngR2gR5xgL2msJWcuOkWubDx0ZJ81k",
    authDomain: "rbnb-261207.firebaseapp.com",
    databaseURL: "https://rbnb-261207.firebaseio.com",
    projectId: "rbnb-261207",
    storageBucket: "rbnb-261207.appspot.com",
    messagingSenderId: "1068048606006",
    appId: "1:1068048606006:web:6e041f5239f72765060997",
    measurementId: "G-E4TPB2X597"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {  
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) { 
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().signOutWithEmailAndPassword(email, password).catch(function(error) { 
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    // Send token to your backend via HTTPS
    // ...
  }).catch(function(error) {
    // Handle error
  });

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    const tokenId = await firebase.auth().currentUser.getIdToken();
    // Store tokenId in session var and/or Cookies
  } catch (error) {
    // Error handling
  }