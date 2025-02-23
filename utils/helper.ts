import * as yup from 'yup';

export const formSchema = yup.object().shape({
   name: yup.string().trim().required('Name is required'),
   email: yup.string().email('Invalid email format').required('Email is required'),
   message: yup.string().trim().required('Message is required'),
   phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Phone number must be digits')
      .required('Phone number is required'),
   quantity: yup.number().positive('Quantity must be greater than zero').integer().required('Quantity is required'),
   purposeOfQuery: yup.string().required('Purpose of query is required')
});
