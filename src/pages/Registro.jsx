import React, { useState, useContext } from 'react';
import "../styles/Registro.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { isValidEmail } from '@/utils/validateEmail';

const Registro = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)
  const [load, setLoad] = useState(false)

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
      [name]: value
    })) // Copia lo anterior y establece lo nuevo segun el name y value
  }


  //handleRegister asincrono para realizar fetch
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoad(true)

    const { username, email, password, confirmPassword } = formData;

    if (!isValidEmail(email)) {
      setError("Correo Electronico Invalido")
      setLoad(false)
      return
    }

    //validacion de contraseña
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoad(false)
      return;
    }

    // Proceso de registro
    try {
      const res = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      })

      const data = await res.json();

      //Validacion de respuesta al fetch
      if (res.ok) {

        login(data.user, data.jwt) // Utilizamos el login del context

        Swal.fire({
          title: 'Registro Completado',
          text: 'Usuario registrado correctamente!',
          icon: 'success',
          confirmButtonText: "De Acuerdo"
        })
        navigate('/');
      } else {
        setError(data?.error?.message || "Error al Registrar Usuario");
      }

    } catch (err) {
      console.error(err);
      setError("Error de Conexion");
    } finally {
      setLoad(false)
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

        <button type="submit" disabled={load} className='cursor-pointer transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80'>
          {load ? "Procesando..." : "Crear Cuenta"}
        </button>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Registro;