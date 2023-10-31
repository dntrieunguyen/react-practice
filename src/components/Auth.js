import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { loginSlice } from '../redux/reducer/loginSlice';
import { useState } from 'react';

const Auth = () => {
   const [user, setUser] = useState({
      email: '',
      password: '',
   });

   const handleChangeEmail = e => {
      const value = e.target.value;
      setUser({
         ...user,
         email: value,
      });
   };
   const handleChangePassword = e => {
      const value = e.target.value;
      setUser({
         ...user,
         password: value,
      });
   };

   const dispatch = useDispatch();

   const handleClickLoginBtn = e => {
      e.preventDefault();

      const newUser = {
         email: user.email,
         password: user.password,
      };

      const validation = newUser => {
         let isValid = true;
         const { email, password } = newUser;
         if (email.trim().length === 0) {
            alert('Please Enter Your Email');
            isValid = false;
         }
         if (password.trim().length === 0) {
            alert('Please Enter Your Password');
            isValid = false;
         }
         return isValid;
      };

      const isValid = validation(newUser);

      if (isValid) {
         dispatch(loginSlice.actions.LOGIN());
         alert('Login Success');
      }
   };
   return (
      <main className={classes.auth}>
         <section>
            <form>
               <div className={classes.control}>
                  <label htmlFor="email">Email</label>
                  <input
                     value={user.email}
                     onChange={handleChangeEmail}
                     type="email"
                     id="email"
                  />
               </div>
               <div className={classes.control}>
                  <label htmlFor="password">Password</label>
                  <input
                     value={user.password}
                     onChange={handleChangePassword}
                     type="password"
                     id="password"
                  />
               </div>
               <button onClick={handleClickLoginBtn}>Login</button>
            </form>
         </section>
      </main>
   );
};

export default Auth;
