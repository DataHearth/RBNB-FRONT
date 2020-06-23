import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Veuillez entrer une adresse amil valide').required('Veuillez entrer un email'),
  password: yup.string().required('Veuillez entrer un mot de passe'),
});
