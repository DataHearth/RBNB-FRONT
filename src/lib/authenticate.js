import firebase from '../firebase';

export default async function authenticate(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    const token = await firebase.auth().currentUser.getIdToken();

    localStorage.setItem('authToken', token);
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        // User not authenticate
        break;
      case 'auth/user-disabled':
        // User disabled
        break;
      case 'auth/invalid-email':
        // Do something when wrong email
        break;
      case 'auth/wrong-password':
        // Do something when wrong email
        break;
      default:
        break;
    }
  }
}

export default async function register(email, password, ) {
  
}