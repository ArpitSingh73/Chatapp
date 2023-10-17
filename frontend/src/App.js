import './App.css';
// import {Button} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Chat from './view/Chat';
function App() {
  return (
   <div className='App'>
    <Routes>
    <Route path = '/' Component={Home}></Route>
    <Route path = '/chat' Component={Chat}></Route>
    </Routes>
    </div>
  );
}

export default App;
