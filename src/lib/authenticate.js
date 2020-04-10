import axios from 'axios';
import firebase from '../firebase';
import logger from './logger';

export async function getAuthToken() {
  const sessionToken = sessionStorage.getItem('authToken');

  if (sessionStorage.getItem('authToken') === null) {
    try {
      const firebaseAuthToken = await firebase.auth().currentUser.getIdToken();

      return firebaseAuthToken;
    } catch (error) {
      logger.error(error);

      return null;
    }
  }

  return sessionToken;
}

async function setCurrentToken() {
  try {
    const token = await firebase.auth().currentUser.getIdToken();

    sessionStorage.setItem('authToken', token);
    return;
  } catch (error) {
    logger.error('Error while setting up session storage auth-token');

    throw error;
  }
}

export async function authenticate(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    Promise.all(setCurrentToken());
  } catch (error) {
    logger.error(error);

    const formattedError = new Error();
    formattedError.name = 'Register error';

    switch (error.code) {
      case 'auth/user-disabled':
        formattedError.message = 'Votre compte a été désactivé';
        break;
      case 'auth/user-not-found':
        formattedError.message = 'Utilisateur non trouvé (email invalide)';
        break;
      case 'auth/wrong-password':
        formattedError.message = 'Mauvais mot de passe';
        break;
      case 'auth/invalid-email':
        formattedError.message = 'Veuillez entrer un email valide (email@example.com)';
        break;
      default:
        formattedError.message = 'Erreur interne...\nVeuillez réessayer plus tard';
        break;
    }

    throw formattedError;
  }
}

export async function register(data) {
  const { email, password } = data;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    await setCurrentToken();

    const response = await axios.put('localhost:8080/users', { data }, {
      headers: {
        'www-authenticate': await getAuthToken(),
      },
    });

    if (response.status === 400) {
      const apiPayloadError = new Error('API wrong payload');

      apiPayloadError.code = 'api/wrong-payload';

      logger.error(apiPayloadError);
      throw apiPayloadError;
    } else if (response.status === 500) {
      const apiInternalError = new Error('Internal API error');

      apiInternalError.code = 'api/internal-error';

      logger.error(apiInternalError);
      throw apiInternalError;
    }

    return response.data;
  } catch (error) {
    logger.error(error);

    const formattedError = new Error();
    formattedError.name = 'Register error';

    switch (error.code) {
      case 'auth/email-already-in-use':
        formattedError.message = 'L\'email est déjà utilisé';
        break;
      case 'auth/invalid-email':
        formattedError.message = 'Veuillez entrer un email valide (email@example.com)';
        break;
      case 'auth/weak-password':
        formattedError.message = 'Mot de passe trop faible';
        break;
      default:
        formattedError.message = 'Erreur interne...\nVeuillez réessayer ou contacter un administrateur';
        break;
    }

    throw formattedError;
  }
}
