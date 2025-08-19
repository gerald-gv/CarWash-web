import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext)
  const [load, setLoad] = useState(false)

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
    setLoad(true)

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

      if (!res.ok) {
        setError(data?.error?.message || "Credenciales incorrectas");
        return;
      }

      const jwt = data.jwt;

      // Se pide segun el usuario logueado junto a su rol
      const resUser = await fetch(`${API_URL}/api/users/me?populate=role`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!resUser.ok) {
        setError("Error al obtener información del usuario");
        return;
      }

      const userWithRole = await resUser.json();

      // Guardamos la d ata de userWithRole y jwt en el context
      login(userWithRole, jwt);
      //console.log(userWithRole.role)
      
      Swal.fire({
        title: "Login Exitoso",
        text: "Se ha logueado con éxito! ",
        icon: "success",
        confirmButtonText: "De Acuerdo"
      })

      if (userWithRole.role.name === "Admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }

    } catch (err) {
      console.error(err);
      setError("Error de conexion")
    } finally {
      setLoad(false)
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

        <button type="submit" disabled={load} className='cursor-pointer transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80'>
          {load ? "Procesando..." : "Iniciar Sesión"}
        </button>

        <p className="register-link">
          ¿Aún no estás registrado? <Link to="/registro">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;