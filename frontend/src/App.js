
import "./App.css";
import Homepage from "./view/Home";
import { Route , Routes} from "react-router-dom";
import Chatpage from "./view/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Homepage/>} ></Route> 
      <Route exact path="/chats" element={<Chatpage/>}  ></Route> 
     
      </Routes>
    </div>
  );
}

export default App;