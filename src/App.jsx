import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import FAQs from './pages/FAQs';
import Reservas from './pages/Reservas'
import Layout from './components/Layout';
import Login from './pages/Login';
import Registro from './pages/Registro';
import AdminDashboard from './pages/admin/Dashboard'
import PrivateRoute from './components/admin/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/reservas" element={<Reservas />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />

      <Route path='/admin' element={
        <PrivateRoute>
          <AdminDashboard />
        </PrivateRoute>}>
      </Route>
    </Routes>
  )
}

export default App
