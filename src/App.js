import './App.css';
import Home from './components/Home';
import Sbook from './components/Sbook';
import Bbooks from './components/Bbooks';
import Login from './components/Login';

import {BrowserRouter, Route,Routes} from 'react-router-dom';
function App() {
  return (<>
    
              
              
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}>Home</Route>
        <Route path='/login' element = {<Login/>}>Login</Route>
        <Route path='/sbook' element = {<Sbook/>}>Sell Book</Route>
        <Route path='/bbooks' element = {<Bbooks/>}>Buy Book</Route>
      </Routes>
    </BrowserRouter>
          
            
    
    </>
  );
}

export default App;
