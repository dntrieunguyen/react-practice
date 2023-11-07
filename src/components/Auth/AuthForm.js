import { Link, useSearchParams, Form, useActionData } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
   const data = useActionData();

   const [searchParams] = useSearchParams();
   const isLogin = searchParams.get('mode') === 'login';
   console.log(searchParams.get('mode'));

   return (
      <section className={classes.auth}>
         <Form method="post">
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <div className={classes.control}>
               <label name="email" htmlFor="email">
                  Your Email
               </label>
               <input name="email" type="email" id="email" required />
            </div>
            <div className={classes.control}>
               <label name="password" htmlFor="password">
                  Your Password
               </label>
               <input name="password" type="password" id="password" required />
            </div>
            <div className={classes.actions}>
               <button>{isLogin ? 'Login' : 'Create Account'}</button>
               <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                  {isLogin
                     ? 'Create new account'
                     : 'Login with existing account'}
               </Link>
            </div>
         </Form>
      </section>
   );
};

export default AuthForm;
