import axios from './axios';
import firebase from './firebase';
import logger from './logger';
import { statusHandler, firebaseAuthHandler } from './errorHandler';

export async function authenticate(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    logger.error(error.message, { error });

    firebaseAuthHandler(error);
  }
}

export async function register(data) {
  const { email, password } = data;
  const userForm = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(data)) {
    userForm.append(key, value);
  }

  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

    userForm.append('uid', user.uid);

    const response = await axios.put('/users', userForm);

    statusHandler(response.status);
  } catch (error) {
    logger.error(error.message, { error });
    if (error.code.startsWith('api/')) {
      throw error;
    }

    firebaseAuthHandler(error);
  }
}
