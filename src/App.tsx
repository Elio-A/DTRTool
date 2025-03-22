import './App.css';
import Login from "./views/LoginPage/Login"
import HomePage from "./views/HomePage/Home"
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log("Here")
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
