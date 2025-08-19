import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import borrarIcon from "/images/borrar.png";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CardService = (props) => {
  const { isAuthenticated, user, token } = useContext(AuthContext);
  const [loader, setLoader] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL;

  // Inicializa el estado según si está reservado
  useEffect(() => {
    setIsFlipped(props.reservado || false);
  }, [props.reservado]);

  //Funcion asincrona para reserva
  const handleReservar = async () => {
    if (!isAuthenticated) {

      const resultado = await Swal.fire({
        title: "Necesitas una cuenta",
        icon: "warning",
        text: "Debes Registrarte o Iniciar Sesion para continuar.",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: "#10B981",
        denyButtonColor: "#2563EB",
        cancelButtonColor: "#EF4444",
        confirmButtonText: "Iniciar Sesion",
        denyButtonText: "Registrarse",
        cancelButtonText: "Cancelar",
        scrollbarPadding: false
      })

      if (resultado.isConfirmed) {
        navigate("/login")
      } else if (resultado.isDenied) {
        navigate("/registro")
      }
      return;
    }

    const hoy = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Fetch para  postear las reservas
    setLoader(true)
    try {
      const res = await fetch(`${API_URL}/api/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            users_permissions_user: user.id,
            fecha_reserva: hoy,
            estado: "pendiente",
            servicio: props.id,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error?.message || "Error al reservar el servicio");
        return;
      }

      //Llama al handleNuevaReserva
      props.onNuevaReserva({
        servicioId: props.id,
        reservaId: data.data.documentId,
        estado: "pendiente",
      });

      setIsFlipped(true);
      toast.success("Se ha agregado una nueva reserva en Mis Reservas")

    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false)
    }
  };


  //Funcion asincrona para cancelar
  const handleCancelar = async () => {
    const resultado = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta reserva será cancelada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Si, cancelar",
      cancelButtonText: "No, volver",
      scrollbarPadding: false
    })
    if (!resultado.isConfirmed) return;

    //console.log("ID reserva para cancelar:", props.reservaId);

    //Fetch para actualizar el estado de una reserva a cancelada
    try {
      const res = await fetch(`${API_URL}/api/reservas/${props.reservaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            estado: "cancelada",
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error?.message || "Error al cancelar la reserva");
        return;
      }

      setIsFlipped(false);
      toast.success("Se cancelo la reserva")

      //Llama al handleEliminarReservaLocal
      props.onCancelarReserva(props.reservaId);
    } catch (err) {
      console.error("Error al cancelar la reserva:", err);
    }
  };

  return (
    <div className="flip-card">
      <article
        className={`flip-card-inner card main-services--card${(props.index % 3) + 1
          } ${isFlipped ? "flipped" : ""}`}
      >
        {/* Cara frontal */}
        <div className={"flip-card-front"}>
          <h2>{props.titulo}</h2>
          <img src={props.img} alt="img" />
          <div className="face front">
            <ul>
              {props.items.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              Precio: <span>{"s/" + props.precio}</span>
            </p>
            <div className="main-services--card--button">
              <button
                className={`button button${(props.index % 3) + 1} cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none`}
                onClick={handleReservar}
                disabled={loader}
                title={isFlipped ? "Ya está reservado" : "Reservar"}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
        {/* Cara trasera */}
        <div className="flip-card-back relative">
          <div className="flex justify-between items-center mr-[16px] ml-[16px] h-[10%]">
            <img
              src={borrarIcon}
              alt="boton borrar"
              onClick={handleCancelar}
              style={{ cursor: "pointer" }}
              title="Cancelar reserva"
            />
            <p>
              x<span>1</span>
            </p>
          </div>
          <div className="grid content-center items-center h-[90%]">
            <p className="flip-card-back--text">Reservado</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardService;
