import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.jsx'


import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>

)
