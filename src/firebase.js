import * as firebase from 'firebase';
import firebaseConfig from './firebaseKey';

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