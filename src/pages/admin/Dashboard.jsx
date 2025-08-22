import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import NavAdmin from '@/components/admin/NavAdmin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tabla from '@/components/reservas/Tabla'

const Dashboard = () => {

  const { loading, token } = useContext(AuthContext);
  const [loadReservas, setLoadReservas] = useState(true); // Estado local de carga
  const [reservasGlobales, setReservasGlobales] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {

    const formatHora = (horaStr) => {
      const date = new Date(`1970-01-01T${horaStr}`);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    };

    const fetchReservasGenerales = async () => {

      if (loading) return


      try {
        setLoadReservas(true)
        const res = await fetch(`${API_URL}/api/reservas?filters[estado][$in]=pendiente&filters[estado][$in]=culminada&populate[servicio][fields][0]=titulo&populate[servicio][fields][1]=precio&populate[users_permissions_user][fields][0]=email
          &populate[franja][fields][0]=nombre&populate[franja][fields][1]=horaInicio&populate[franja][fields][2]=horaFin`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()
        //console.log("Reservas desde Strapi:", data)

        // Reservas Formateadas
        const reservasFormat = data.data.map((reserva) => ({
          id: reserva.documentId,
          email: reserva.users_permissions_user?.email || "Sin email",
          servicio: reserva.servicio?.titulo || "Sin servicio",
          monto: reserva.servicio?.precio || 0,
          estado: reserva.estado,
          fecha: reserva.fecha_reserva || "Sin Fecha" ,
          franja: reserva.franja
            ? `${formatHora(reserva.franja.horaInicio)} - ${formatHora(reserva.franja.horaFin)}`
            : "Sin horario",
        }))

        setReservasGlobales(reservasFormat)

      } catch (err) {
        console.error("Error el cargar los datos: " + err)
      } finally {
        setLoadReservas(false)
      }
    }

    fetchReservasGenerales()

  }, [loading, token])


  const culminarReservas = async (reservaId) => {

    try {
      const res = await fetch(`${API_URL}/api/reservas/${reservaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ data: { estado: "culminada" } })
      });

      if (!res.ok) {
        console.error("Error al Actualizar los datos")
      }

      // Establecer un nuevo estado a las reservas para re-renderizar la pagina (Persistencia Visual)
      setReservasGlobales(prev => prev.map(r =>
        r.id === reservaId ? { ...r, estado: "culminada" } : r
      )
      );

    } catch (err) {
      console.error("Se presento algun error: " + err)
    }
  }

  const pendientes = reservasGlobales.filter(r => r.estado === "pendiente");
  const culminadas = reservasGlobales.filter(r => r.estado === "culminada");


  return (
    <div>
      <NavAdmin />
      <h1 className='font-bold text-2xl my-4 px-4'>Historial de Reservas</h1>

      <Tabs defaultValue="pendiente" className="w-full px-4">

        <TabsList>
          <TabsTrigger value="pendiente">Pendientes</TabsTrigger>
          <TabsTrigger value="culminada">Culminadas</TabsTrigger>
        </TabsList>

        <TabsContent className="p-3" value="pendiente">

          {loadReservas ? (
            <p>Cargando Reservas...</p>
          ) : pendientes.length > 0 ? (
            <Tabla reserva={pendientes} onCulminarReserva={culminarReservas} isAdmin />
          ) : (
            <p className='text-center text-gray-900 mt-5'>No hay Reservas Pendientes</p>
          )}

        </TabsContent>

        <TabsContent className="p-3" value="culminada">

          {loadReservas ? (
            <p>Cargando Reservas...</p>
          ) : culminadas.length > 0 ? (
            <Tabla reserva={culminadas} />
          ) : (
            <p className='text-center text-gray-900 mt-5'>No hay Reservas Culminadas</p>
          )}

        </TabsContent>
      </Tabs>
    </div>

  )
}

export default Dashboard