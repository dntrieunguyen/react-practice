import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Layout from './layout/Layout';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />}></Route>
                  <Route path="Team" element={<Team />}></Route>
                  <Route path="Projects" element={<Projects />}></Route>
                  <Route path="Calendar" element={<Calendar />}></Route>
                  <Route path="Form" element={<Form />}></Route>
                  <Route path="/Detail/:id" element={<Detail />}></Route>
               </Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
