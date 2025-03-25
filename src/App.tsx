import './App.css';
import Login from "./views/LoginPage/Login"
import HomePage from "./views/HomePage/Home"
import Signup from "./views/SignupPage/Signup"
// import MapView from "./views/MapPage/MapView"
// import NbPower from './views/OutsideLinks/NbPower';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
// import Sidebar from './global/AppSidebar';
import { useState } from 'react';
//import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

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
