import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import FAQs from './pages/FAQs';
import Layout from './components/Layout';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/faqs" element={<FAQs />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
    </Routes>
  )
}

export default App
