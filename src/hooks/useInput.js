import { useState } from 'react';

export const useInput = () => {
   //handle
   const [form, setForm] = useState({
      email: '',
      password: '',
   });
   const handleChangeForm = e => {
      const { name, value } = e.target;
      setForm(state => ({ ...state, [name]: value }));
   };

   return { form, handleChangeForm };
};
