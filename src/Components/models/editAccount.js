import * as yup from 'yup';

export default yup.object().shape({
  password: yup.string().required(),
  address: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  picture: yup.mixed().notRequired(),
});
