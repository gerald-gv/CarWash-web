import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getEstadoBadge } from '@/utils/getEstadoBadge'

const Tabla = ({ reserva }) => {
    return (
        <Table>
            <TableCaption>Historial de Reservas</TableCaption>
            <TableHeader>
                <TableRow className="bg-gray-200 text-gray-800">
                    <TableHead>Email</TableHead>
                    <TableHead>Servicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className= "text-right">Monto</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reserva.map((r) => (
                    <TableRow key={r.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <TableCell className="font-medium text-gray-700">{r.email}</TableCell>
                        <TableCell className="font-medium text-gray-700">{r.servicio}</TableCell>
                        <TableCell>{getEstadoBadge(r.estado)}</TableCell>
                        <TableCell className= "text-right font-semibold text-green-800">S/. {r.monto}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Tabla