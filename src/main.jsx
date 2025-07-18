import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from'react-router-dom';
import Context from "./Utils/Context.jsx";
import ReactDom from "react-dom/client"

createRoot(document.getElementById('root')).render(

  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
  
)
