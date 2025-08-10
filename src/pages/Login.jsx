import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext)

  const API_URL = import.meta.env.VITE_API_URL

  // Objeto form para Login
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // HandleChange generico que va cambiando segun el input ( establece nuevos datos al Form)
  const handleChange = (e) => {
    const { name, value } = e.target; // Desestructuracion para los inputs
    setFormData(prev => ({
      ...prev,
      [name]: value // Copia lo anterior y establece lo nuevo segun el name y value
    }))
  }

  // HandleLogin asincrono para realizar fetch
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData

    // Proceso de login
    try {
      const res = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password
        })
      })

      const data = await res.json();

      // Validacion de respuestas al fetch
      if (res.ok) {
        login(data.user, data.jwt) // Se utiliza login del context

        alert("Se ha logueado con exito");
        navigate("/");
      } else {
        setError(data?.error?.message || "Credenciales incorrectas")
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexion")
    }

  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar Sesión</h2>

        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Iniciar Sesión</button>

        <p className="register-link">
          ¿Aún no estás registrado? <Link to="/registro">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;