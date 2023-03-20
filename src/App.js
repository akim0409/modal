import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from "./Counter";
import Modal from './Modal';
import NavBar from './NavBar';
// routes
//    /counter
//    /modal
const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/counter" Component={Counter}/>
        <Route path="/modal" Component={Modal}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
