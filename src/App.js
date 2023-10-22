import { Typography, Divider } from 'antd';
import './App.scss';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
   return (
      <div
         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
         style={{
            width: 500,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            padding: 20,
            boxShadow: '0 0 10px 4px #bfbfbf',
            borderRadius: 5,
            height: '90vh',
         }}
      >
         <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
         <Filters />
         <Divider />
         <TodoList />
      </div>
   );
}

export default App;
