import { StrictMode } from "react";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './views/login'
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  </StrictMode>
)