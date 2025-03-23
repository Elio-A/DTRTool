import './App.css';
import Login from "./views/LoginPage/Login"
import HomePage from "./views/HomePage/Home"
import Signup from "./views/SignupPage/Signup"
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log("Here")
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
