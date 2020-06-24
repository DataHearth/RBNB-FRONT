import * as yup from 'yup';

export default yup.object().shape({
  user: yup.string().min(0),
  title: yup.string().min(10, 'Le titre de votre annonce doit avoir un minimum de 10 charactères').required('Veuillez entrer un titre'),
  description: yup.string().min(20, 'La description de votre annonce doit avoir un minimum de 20 charactères').required('Veuillez entrer une description'),
  location: yup.string().min(3, 'La localisation de votre annonce doit avoir un minimum de 3 charactères').required('Veuillez entrer une localisation'),
  price: yup.number().min(2, 'Le prix de votre annonce doit avoir un minimum de 2 chiffres').required('Veuillez entrer un prix'),
  resident: yup.number().min(1, 'Le prix de votre annonce doit avoir un minimum de 1 chiffres').required('Veuillez entrer un nombre de résident'),
  rentalType: yup.string().min(0),
  smoking: yup.boolean().required('Veuillez préciser si le logement est pour les fumeurs ou non'),
  type: yup.string().min(3, 'La type de logement de votre annonce doit avoir un minimum de 3 charactères').required('Veuillez entrer un type de logement'),
  pictures: yup.mixed().required('Veuillez ajouter une photo'),
  rooms: yup.number().min(1, 'Le nombre de chambre de votre annonce doit avoir un minimum de 1 chiffres').required('Veuillez entrer un nombre de chambres'),
  services: yup.array().notRequired(),
});
