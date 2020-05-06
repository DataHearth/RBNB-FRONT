import firebase from 'firebase';
import firebaseConfig from '../firebaseKey.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
