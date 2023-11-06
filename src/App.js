import { useState } from 'react';
import './App.scss';
import ErrorModal from './Component/ErrorModal';
import UserDisplay from './Component/UserDisplay';
import UsersForm from './Component/UsersForm';
import './Component/style.scss';

const userListDemo = [
   {
      name: 'user 1',
      age: 28,
   },
   {
      name: 'user 2',
      age: 29,
   },
   {
      name: 'user 3',
      age: 30,
   },
   {
      name: 'user 4',
      age: 31,
   },
];

function App() {
   const [userList, setUserList] = useState(userListDemo);
   const [error, setError] = useState({
      title: '',
      message: '',
      isShowErrorModal: false,
   });

   return (
      <>
         <UsersForm setError={setError} setUserList={setUserList}></UsersForm>

         <UserDisplay userList={userList}></UserDisplay>

         {error.isShowErrorModal && (
            <ErrorModal setError={setError} error={error}></ErrorModal>
         )}
      </>
   );
}

export default App;
