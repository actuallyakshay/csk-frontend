import { toast } from 'react-toastify';

export const validateFileds = (input: any) => {
   let isValidated = true;

   const { name, email, quantity } = input;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email');
      return false;
   }

   if (!name || !quantity) {
      toast.error('Please fill all the fields');
      return false;
   }

   return isValidated;
};

export const validatePhone = (number: string, format: string) => {
   return format === String(number).replace(/[0-9]/g, '.');
};
