import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import './css/main.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
