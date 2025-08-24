import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// Genera páginas con ellipsis
export const generatePaginationItems = (totalPages, currentPage) => {
  const pages = []
  const delta = 1 // cantidad de páginas alrededor de la actual

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
      pages.push({ type: "page", page: i })
    } else if (i === 2 && currentPage - delta > 3) {
      pages.push({ type: "ellipsis", key: "ell-start" })
    } else if (i === totalPages - 1 && currentPage + delta < totalPages - 2) {
      pages.push({ type: "ellipsis", key: "ell-end" })
    }
  }
  return pages
}

const PaginatedTable = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const paginationItems = generatePaginationItems(totalPages, currentPage)

  if (totalPages <= 1) return null

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {/* Botón Previous */}
        <PaginationPrevious onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          className={currentPage === 1 ? "pointer-events-none opacity-50" // Deshabilitado si está en la primera
            : "cursor-pointer hover:bg-muted"
          }
        >
          Anterior
        </PaginationPrevious>

        {/* Números Pag */}
        {paginationItems.map((item, idx) =>
          item.type === "ellipsis" ? (
            <PaginationEllipsis key={item.key || idx} />
          ) : (
            <PaginationItem key={item.page}>
              <PaginationLink
                className="cursor-pointer"
                isActive={item.page === currentPage}
                onClick={() => setCurrentPage(item.page)}
              >
                {item.page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Botón Next */}
        <PaginationNext onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" // Deshabilitado si está en la última
            : "cursor-pointer hover:bg-muted"
          }
        >
          Siguiente
        </PaginationNext>

      </PaginationContent>
    </Pagination>
  )
}

export default PaginatedTable
