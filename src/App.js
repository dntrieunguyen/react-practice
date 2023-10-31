import './App.scss';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UseProfile';
import { useDispatch, useSelector } from 'react-redux';

function App() {
   const isLogin = useSelector(state => state.isLogin.isLogin);
   const dispatch = useDispatch();
   return (
      <>
         <Header></Header>
         {isLogin === false && <Auth></Auth>}
         {isLogin && <UserProfile></UserProfile>}

         {isLogin && <Counter></Counter>}
      </>
   );
}

export default App;
