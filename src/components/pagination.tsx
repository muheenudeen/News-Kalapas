"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 my-6">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="p-2 rounded-md bg-white disabled:opacity-50"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex gap-1">
        {Array.from({ length: Math.min(6, totalPages) }, (_, i) => {
          const pageNum = i + 1
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded-md ${
                currentPage === pageNum ? "bg-mint-200 text-mint-700" : "bg-white hover:bg-slate-100"
              }`}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="p-2 rounded-md bg-white disabled:opacity-50"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

