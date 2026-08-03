import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import Login from './pages/login'
import Registro from './pages/Registro'
import { TattoosPage } from './pages/TattoosPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} /> 
        <Route path="/tattoos" element={<TattoosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
