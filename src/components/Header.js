import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { loginSlice } from '../redux/reducer/loginSlice';

const Header = () => {
   const isLogin = useSelector(state => state.isLogin.isLogin);
   const dispatch = useDispatch();

   const handleClickLogOutBtn = e => {
      dispatch(loginSlice.actions.LOGOUT());
   };
   return (
      <header className={classes.header}>
         <h1>Redux Auth</h1>
         <nav>
            {isLogin && (
               <ul>
                  <li>
                     <a href="/">My Products</a>
                  </li>
                  <li>
                     <a href="/">My Sales</a>
                  </li>
                  <li>
                     <button onClick={handleClickLogOutBtn}>Logout</button>
                  </li>
               </ul>
            )}
         </nav>
      </header>
   );
};

export default Header;
