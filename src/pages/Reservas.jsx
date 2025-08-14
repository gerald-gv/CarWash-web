import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tabla from '@/components/reservas/Tabla'

const Reservas = () => {

    const { user, token, isAuthenticated, loading } = useContext(AuthContext);
    const [reservas, setReservas] = useState([]);
    const [loadingReservas, setLoadingReservas] = useState(true);
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {

        const fetchReservasUsuario = async () => {

            // Si el context sigue verificando el user y token, aun no hara nada
            if (loading) return

            // Si no esta autenticado, establece sus reservas vacias y como ultimo lo redirige al inicio
            if (!isAuthenticated) {
                setReservas([]);
                navigate("/")
                return
            }

            try {
                //Se vuelve true al loading de ese enrutado
                setLoadingReservas(true)
                const res = await fetch(
                    `${API_URL}/api/reservas?filters[users_permissions_user][id][$eq]=${user.id}&populate[servicio][fields][0]=titulo&populate[servicio][fields][1]=precio&populate[users_permissions_user][fields][0]=email`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                const data = await res.json();

                //Se mapea la informacion para que sea legible
                const reservasMaps = data.data.map((reserva) => ({
                    email: reserva.users_permissions_user?.email || "Sin email",
                    servicio: reserva.servicio?.titulo || "Sin servicio",
                    monto: reserva.servicio?.precio || 0,
                    estado: reserva.estado,
                }))

                setReservas(reservasMaps);
            } catch (err) {
                console.error("Error al cargar las reservas del usuario: ", err)
            } finally {
                setLoadingReservas(false)
            }
        }

        fetchReservasUsuario();
    }, [loading, isAuthenticated, user, token])

    //Filtrara segun el tipo de estado para usar en cada tabla
    const pendientes = reservas.filter((r) => r.estado === "pendiente");
    const culminadas = reservas.filter((r) => r.estado === "culminada");

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>Mis Reservas</h1>
            <Tabs defaultValue="pendientes" className="w-full">
                <TabsList>
                    <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
                    <TabsTrigger value="culminadas">Culminadas</TabsTrigger>
                </TabsList>

                <TabsContent value="pendientes">
                    {loadingReservas ? (
                        <p className='text-center text-gray-500 mt-5'>Cargando reservas...</p>
                    ) : pendientes.length > 0 ? (
                        <Tabla reserva={pendientes} /> //Solo esta trayendo segun el filtrado de pendiente
                    ) : (
                        <p className='text-center text-gray-900 mt-5'>No tienes Reservas Pendientes</p>
                    )}
                </TabsContent>

                <TabsContent value="culminadas">
                    {loadingReservas ? (
                        <p className='text-center text-gray-500 mt-5'>Cargando reservas...</p>
                    ) : culminadas.length > 0 ? (
                        <Tabla reserva={culminadas} /> //Solo esta trayendo segun el filtrado de culminado
                    ) : (
                        <p className='text-center text-gray-900 mt-5'>No tienes Reservas Culminadas</p>
                    )}
                </TabsContent>

            </Tabs>
        </div>

    )
}

export default Reservas