import React, { useState } from 'react';
import "../styles/Registro.css";
import { Link, useNavigate } from 'react-router-dom';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if(password !== confirmPassword){
      setError('Las contraseñas no coinciden');
      return;
    }

    // Aquí podrías guardar datos en localStorage o simplemente mostrar en consola
    console.log('Registrando usuario:', { username, email, password });

    alert('Usuario registrado correctamente!');

    // Redireccionar a login, por ejemplo
    navigate('/login');
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleRegister} className="registro-form">
        <h2>Registro</h2>

        <label>Nombre de usuario *</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label>Correo electrónico *</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Contraseña *</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <label>Confirmar contraseña *</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Crear cuenta</button>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Registro;