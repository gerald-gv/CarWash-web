// src/components/Login.js
import React, { useState } from 'react';
import "../styles/Login.css"; // Ya apunta a la carpeta correcta

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
    // Aquí se puede agregar lógica real de autenticación
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar Sesión</h2>

        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>

        <p className="register-link">
          ¿Aún no estás registrado? <a href="/registro">Crear cuenta</a>
        </p>
      </form>
    </div>
  );
};

export default Login;