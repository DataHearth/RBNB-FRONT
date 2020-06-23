import * as yup from 'yup';

export default yup.object().shape({
  firstname: yup.string().min(3, 'Un prénom doit avoir un minimum de 3 charactères').required('Veuillez entrer un prénom'),
  lastname: yup.string().min(4, 'Un nom de famille doit avoir un minimum de 4 charactères').required('Veuillez entrer un nom de famille'),
  email: yup.string().email('Veuillez entre un e-mail valide').required('Veuillez entrer un e-mail'),
  password: yup.string().min(4, 'Un mot de passe doit faire plus de 4 charactères').required('Veuillez entrer un mot de passe'),
  address: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  // ? Should this be still in the back-end user's model ?
  picture: yup.mixed().default('http://www.einstein.yu.edu/uploadedImages/PollardLab/PhotoNotAvailable.gif?n=5454'),
});
