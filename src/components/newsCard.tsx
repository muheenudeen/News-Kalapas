"use client"

import Image from "next/image"
import type { Article } from "@/lib/api"
import { X } from "lucide-react"

interface NewsCardProps {
  article: Article
  onClick?: (article: Article) => void
}

export default function NewsCard({ article, onClick }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toUTCString().replace("GMT", "GMT")
  }

  const handleClick = () => {
    if (onClick) {
      onClick(article)
    }
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer" onClick={handleClick}>
      <div className="relative p-4">
        <button
          className="absolute top-2 right-2 text-red-400 hover:text-red-500 z-10"
          onClick={(e) => {
            e.stopPropagation() 
          }}
        >
          <X size={20} />
        </button>

        <h2 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h2>
        <p className="text-slate-600 text-sm mb-2 line-clamp-2">{article.description}</p>

        <div className="flex items-center text-xs text-slate-500 mb-2">
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
        </div>
      </div>

      <div className="h-48 relative">
        <Image
          src={article.urlToImage || "/placeholder.svg?height=200&width=400"}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

