export const paginateItems = ({ items, currentPage, itemsPerPage }) => {
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const indexLast = currentPage * itemsPerPage
  const indexFirst = indexLast - itemsPerPage
  const currentItems = items.slice(indexFirst, indexLast)

  return {
    currentItems,
    totalPages,
  }
}
