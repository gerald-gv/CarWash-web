import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import FAQs from './pages/FAQs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  )
}

export default App
