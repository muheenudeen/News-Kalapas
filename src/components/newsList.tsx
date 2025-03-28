"use client"

import Image from "next/image"
import type { Article } from "@/lib/api"
import { X } from "lucide-react"

interface NewsListProps {
  article: Article
  onClick?: (article: Article) => void
}

export default function NewsList({ article, onClick }: NewsListProps) {
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
    <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4 relative cursor-pointer" onClick={handleClick}>
      <button
        className="absolute top-4 right-4 text-red-400 hover:text-red-500 z-10"
        onClick={(e) => {
          e.stopPropagation() 
        }}
      >
        <X size={20} />
      </button>

      <div className="flex-shrink-0">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={article.urlToImage || "/placeholder.svg?height=80&width=80"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0 pr-8">
        <h2 className="font-semibold text-lg line-clamp-1">{article.title}</h2>
        <p className="text-slate-600 text-sm line-clamp-1">{article.description}</p>
        <div className="text-xs text-slate-500 mt-1">{formatDate(article.publishedAt)}</div>
      </div>
    </div>
  )
}

