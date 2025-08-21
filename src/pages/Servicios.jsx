import React, { useState, useEffect, useContext } from "react";
import CardService from "@/components/CardService";
import SkeletonCard from "@/components/servicios/SkeletonCard";
import "@/styles/Servicios.css";
import { AuthContext } from "../context/AuthContext";

const Servicios = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loadingServicios, SetLoadingServicios] = useState(true);
  const [deshabilitarBotones, setDeshabilitarBotones] = useState(false)
  const [reservasUsuario, setReservasUsuario] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const { user, token, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchServicios = async () => {

      //Fetch para jalar la data de las Cards
      try {
        const res = await fetch(
          `${API_URL}/api/servicios?populate[detalles]=*&populate=imagen`
        );
        const data = await res.json();

        const serviciosFormateados = data.data.map((card) => ({
          id: card.id,
          titulo: card.titulo,
          precio: card.precio,
          img: card.imagen.url,
          items: card.detalles.map((det) => det.nombre),
        }));
        setCardsData(serviciosFormateados);
      } catch (err) {
        console.error("Error al cargar servicios:", err);
      } finally {
        SetLoadingServicios(false)
      }
    };

    fetchServicios();
  }, []);

  useEffect(() => {
    const fetchReservasUsuario = async () => {

      // Si no esta autenticado, actualiza el estado con un array vacio
      if (!isAuthenticated) {
        setReservasUsuario([]);
        return;
      }

      //Fetch de reservas por usuario
      try {
        const res = await fetch(
          `${API_URL}/api/reservas?filters[users_permissions_user][id][$eq]=${user.id}&filters[estado][$eq]=pendiente&populate=servicio`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();

        const reservasMapeadas = data.data.map((reserva) => {
          //console.log("Reserva cargada:", reserva.id, reserva.estado, reserva.servicio?.id);
          return {
            servicioId: reserva.servicio.id,
            reservaId: reserva.documentId,
            estado: reserva.estado,
          }
        });
        setReservasUsuario(reservasMapeadas); // Se llena el estado reservaUsuario con el mapeado
      } catch (err) {
        console.error("Error al cargar reservas del usuario:", err);
      }
    };

    fetchReservasUsuario();
  }, [isAuthenticated, user, token]);


  // Actualiza de manera local una reserva eliminada del usuario
  const handleEliminarReservaLocal = (reservaId) => {
    setReservasUsuario((prev) => prev.filter((r) => r.reservaId !== reservaId));
  };

  // Actualiza de manera local una nueva reserva del usuario
  const handleNuevaReserva = (nuevaReserva) => {
    setReservasUsuario((prev) => [...prev, nuevaReserva]);
  };

  return (
    <div>
      <main className="main-section">
        <section className="flex flex-wrap justify-around gap-y-[33px]">
          {loadingServicios ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            cardsData.map((card, index) => {
              {/*Busca solo las reservas que coincidan con el numero de servicio que se itera en el map y que el estado no sea cancelada*/}
              const reserva = reservasUsuario.find(
                (r) => r.servicioId === card.id && r.estado !== "cancelada"
              )

              return (
                <CardService
                  key={card.id}
                  titulo={card.titulo}
                  precio={card.precio}
                  id={card.id}
                  img={card.img}
                  items={card.items}
                  index={index}
                  reservado={reserva?.estado === "pendiente"} // Confirmacion Booleana (Activa el flip de las cards en reserva)
                  reservaId={reserva?.reservaId}
                  onCancelarReserva={handleEliminarReservaLocal}
                  onNuevaReserva={handleNuevaReserva}
                  deshabilitarBotones={deshabilitarBotones}
                  setDeshabilitarBotones={setDeshabilitarBotones}
                />
              )
            })
          )}
        </section>
      </main>
    </div>
  )
}

export default Servicios;
