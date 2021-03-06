import axios from 'axios';
import firebase from './firebase';

export default axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://rbnb-back.herokuapp.com/' : 'http://localhost:8080/',
  headers: {
    'www-authenticate': firebase.auth().currentUser !== null ? firebase.auth().currentUser.uid : undefined,
  },
  responseType: 'json',
});
