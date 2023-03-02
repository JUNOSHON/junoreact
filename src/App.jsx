import logo from './logo.svg';
import './App.css';
import Home from "./Practice/Home";
import Login from "./Practice/Login";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
  <ul>
    <li><Link to={'./Practice/home'}>HOME</Link></li>
    <li><Link to={'./Practice/home'}>Login</Link></li>
  </ul>
  
  <Routes>
    <Routs path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  
  );
}

export default App
