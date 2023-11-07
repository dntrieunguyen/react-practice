import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/Auth/AuthForm';

const AuthPage = () => {
   return <AuthForm />;
};

export default AuthPage;

export async function action({ request }) {
   const searchParams = new URL(request.url).searchParams;
   const mode =
      searchParams.get('mode') === 'login' ? 'signInWithPassword' : 'signUp';

   console.log(mode);
   if (mode !== 'signInWithPassword' && mode !== 'signUp') {
      throw json({ message: 'Unsupported mode.' }, { status: 442 });
   }

   const data = await request.formData();
   const authData = {
      email: data.get('email'),
      password: data.get('password'),
   };

   console.log(searchParams.get('mode'), mode, authData);

   const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyATdYi9qBzJZmwOaHD0V2SNXy3_9Em0WtE`,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(authData),
      },
   );

   if (response.status === 422 || response.status === 401) {
      return;
   }

   if (!request.ok) {
      throw json({ message: 'Could not authenticate user.' }, { status: 500 });
   }

   return redirect('/');
}
