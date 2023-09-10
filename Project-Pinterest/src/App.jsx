import React from 'react';
import Login from './Login/Login'
import Register from './Login/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes> {/* Usar Routes en lugar de Route */}
        <Route path="/" element={<Login />} /> {/* Vista de inicio de sesión */}
        <Route path="/signup" element={<Register />} /> {/* Vista de registro */}
        {/* Agrega más rutas según las necesidades de tu aplicación */}
      </Routes>
    </Router>
  )
}

export default App
