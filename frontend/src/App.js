// import './App.css';
// // import {Button} from '@chakra-ui/react'
// import { Route, Routes } from 'react-router-dom';
// import Home from './view/Home';
// import Chat from './view/Chat';
// function App() {
//   return (
//    <div className='App'>
//     <Routes>
//     <Route path = '/' Component={Home}></Route>
//     <Route path = '/chat' Component={Chat}></Route>
//     </Routes>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Homepage from "./view/Home";
import { Route , Routes} from "react-router-dom";
import Chatpage from "./view/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
      {/*  <Route exact path="/" element={<Home show={show} />}></Route> */}
      <Route  path="/" element={<Homepage/>} ></Route> 
      <Route  path="/chats" element={<Chatpage/>}  ></Route> 
     
      </Routes>
    </div>
  );
}

export default App;