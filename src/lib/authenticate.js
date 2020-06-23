import axios from './axios';
import firebase from './firebase';
import logger from './logger';

export async function authenticate(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
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
  const userForm = new FormData();

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(data)) {
    userForm.append(key, value);
  }

  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

    userForm.append('uid', user.uid);

    const response = await axios.put('/users', userForm);

    if (response.status === 400) {
      const apiPayloadError = new Error('API wrong payload');
      apiPayloadError.code = 'api/wrong-payload';

      throw apiPayloadError;
    } else if (response.status === 500) {
      const apiInternalError = new Error('Internal API error');
      apiInternalError.code = 'api/internal-error';

      throw apiInternalError;
    }
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
      case 'api/internal-error':
        formattedError.message = 'Erreur serveur...\nVeuillez contacter un admin';
        break;
      case 'api/wrong-payload':
        formattedError.message = 'Erreur de validation';
        break;
      default:
        formattedError.message = 'Erreur interne...\nVeuillez réessayer ou contacter un administrateur';
        break;
    }

    throw formattedError;
  }
}
