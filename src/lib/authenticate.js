import firebase from '../firebase';
import logger from './logger';

async function setCurrentToken() {
  try {
    const token = await firebase.auth().currentUser.getIdToken();

    localStorage.setItem('authToken', token);
    return;
  } catch (error) {
    logger.error('Error while setting up local storage token');

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

    Promise.all(setCurrentToken());
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
        formattedError.message = 'Erreur interne...\nVeuillez réessayer plus tard';
        break;
    }

    throw formattedError;
  }
}
