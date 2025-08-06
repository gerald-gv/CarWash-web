import React, { useState, useContext } from 'react';
import "../styles/Registro.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Registro = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)

  const API_URL = import.meta.env.VITE_API_URL

  //Objeto form para usar un solo estado
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })


  // handleChange generico, establece nuevos cambios al formData
  const handleChange = (e) => {
    const { name, value } = e.target // desestructuracion para inputs
    setFormData(prev => ({ 
      ...prev,
      [name]: value})) // Copia lo anterior y establece lo nuevo segun el name y value
  }
  

  //handleRegister asincrono para realizar fetch
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    const { username, email, password, confirmPassword } = formData;

    //validacion de contraseña
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Proceso de registro
    try {
      const res = await fetch(`${API_URL}api/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      })

      const data = await res.json();

      //Validacion de respuesta al fetch
      if (res.ok) {

        login(data.user, data.jwt) // Utilizamos el login del context

        alert('Usuario registrado correctamente!');
        navigate('/');
      } else {
        setError( data?.error?.message || "Error al Registrar Usuario");
      }
      
    } catch (err){
      console.error(err);
      setError("Error de Conexion");
    }

    // Verificar Token y Usuario Registado
    //console.log("Usuario Registrado: ", formData)


  };

  return (
    <div className="registro-container">
      <form onSubmit={handleRegister} className="registro-form">
        <h2>Registro</h2>

        <label>Nombre de usuario *</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico *</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña *</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirmar contraseña *</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
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

export default Registro;