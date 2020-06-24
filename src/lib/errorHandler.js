import logger from './logger';

export const statusHandler = (status) => {
  const customError = new Error();
  let isError = false;

  switch (status) {
    case 204:
      isError = true;
      customError.message = 'Le contenu demandé n\'existe pas, veuillez contacter un administrateur';
      customError.code = 'api/no-content';
      break;
    case 500:
      isError = true;
      customError.message = 'Une erreur serveur est survenue veuillez contacter un administrateur';
      customError.code = 'api/internal-error';
      break;
    case 400:
      isError = true;
      customError.message = 'Une erreur de validation est survenue lors de l\'ajout... Veuillez réessayer';
      customError.code = 'api/wrong-payload';
      break;
      // * Want to exclude the correct status
    case 201:
      break;
    case 200:
      break;
    default:
      isError = true;
      customError.message = 'Status non pris en charge...';
      customError.code = 'api/unknown-status';
      break;
  }

  if (isError) {
    customError.name = 'API error';
    logger.error(customError.message, { error: customError });
    throw customError;
  }
};

export const firebaseAuthHandler = (error) => {
  const customError = new Error();
  customError.name = 'Authentification error';
  customError.code = error.code;

  switch (error.code) {
    case 'auth/email-already-in-use':
      customError.message = 'L\'email est déjà utilisée';
      break;
    case 'auth/invalid-email':
      customError.message = 'Veuillez entrer un email valide (email@example.com)';
      break;
    case 'auth/weak-password':
      customError.message = 'Mot de passe trop faible';
      break;
    case 'api/internal-error':
      customError.message = 'Erreur serveur...\nVeuillez contacter un admin';
      break;
    case 'api/wrong-payload':
      customError.message = 'Erreur de validation';
      break;
    case 'auth/user-disabled':
      customError.message = 'Votre compte a été désactivé';
      break;
    case 'auth/user-not-found':
      customError.message = 'Utilisateur non trouvé (email invalide)';
      break;
    case 'auth/wrong-password':
      customError.message = 'Mauvais mot de passe';
      break;
    case 'auth/requires-recent-login':
      customError.message = 'Votre date de connexion est trop ancienne. Veuillez vous reconnecter et reeffectuer l\'operation';
      break;
    default:
      customError.message = 'Erreur interne...\nVeuillez réessayer ou contacter un administrateur';
      break;
  }

  throw customError;
};
