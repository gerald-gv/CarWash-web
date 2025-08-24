export const paginateItems = ({ items, currentPage, itemsPerPage }) => {
  const indexLast = currentPage * itemsPerPage // Calculo de indice final de todo el array
  const indexFirst = indexLast - itemsPerPage // Calculo de indice inicial de todo el array
  const currentItems = items.slice(indexFirst, indexLast) // Total de items mostradas para esa pagina

  return {
    currentItems,
  }
}
