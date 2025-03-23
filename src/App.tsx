import './App.css';
import Login from "./views/LoginPage/Login"
import HomePage from "./views/HomePage/Home"
import NbPower from './views/OutsideLinks/NbPower';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log("Here")
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/NBPower" element={<NbPower/>}/>
    </Routes>
  );
}

export default App;
