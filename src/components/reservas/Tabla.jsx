import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getEstadoBadge } from '@/components/helpers/getEstadoBadge'

const Tabla = ({ reserva, onCulminarReserva, isAdmin }) => {
    return (
        <Table>
            <TableCaption>Historial de Reservas</TableCaption>
            <TableHeader>
                <TableRow className="bg-gray-200 text-gray-800">
                    <TableHead>Email</TableHead>
                    <TableHead>Servicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Turno</TableHead>
                    <TableHead className= "text-right">Monto</TableHead>
                    {isAdmin && (
                        <TableHead className="text-center">Culminar Reserva</TableHead>
                    )}
                </TableRow>
            </TableHeader>
            <TableBody>
                {reserva.map((r) => (
                    <TableRow key={r.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <TableCell className="font-medium text-gray-700">{r.email}</TableCell>
                        <TableCell className="font-medium text-gray-700">{r.servicio}</TableCell>
                        <TableCell>{getEstadoBadge(r.estado)}</TableCell>
                        <TableCell>{r.fecha}</TableCell>
                        <TableCell>{r.franja}</TableCell>
                        <TableCell className= "text-right font-semibold text-green-800">S/. {r.monto}</TableCell>
                        {isAdmin ? (
                            <TableCell className="text-center">
                                {r.estado === "pendiente" ? (
                                    <button className='px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'
                                        onClick={() => onCulminarReserva(r.id)}
                                    >
                                        Culminar
                                    </button>
                                ) : null}
                            </TableCell>
                        ) : null}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Tabla