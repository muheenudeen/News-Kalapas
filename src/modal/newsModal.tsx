"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import type { Article } from "@/lib/api"
import { X } from "lucide-react"

interface NewsModalProps {
  article: Article | null
  isOpen: boolean
  onClose: () => void
}

export default function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toUTCString().replace("GMT", "GMT")
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl overflow-hidden shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">News Details</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-4 flex-1">
          {article.urlToImage && (
            <div className="relative h-64 mb-4">
              <Image
                src={article.urlToImage || "/placeholder.svg?height=400&width=600"}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <h1 className="text-2xl font-bold mb-2">{article.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-4">
            <span className="inline-flex items-center mr-4">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatDate(article.publishedAt)}
            </span>
            {article.source.name && <span className="mr-4">Source: {article.source.name}</span>}
            {article.author && <span>By: {article.author}</span>}
          </div>

          <p className="text-lg mb-4">{article.description}</p>

          <div className="max-w-none">
            <p>{article.content}</p>
          </div>

          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 py-2 px-4 bg-mint-200 text-mint-700 rounded-md font-medium hover:bg-mint-300 transition-colors"
            >
              Read Full Article
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

