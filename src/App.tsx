import './App.css';
import Login from "./views/LoginPage/Login"
import HomePage from "./views/HomePage/Home"
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log("Here")
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
}

export default App;
