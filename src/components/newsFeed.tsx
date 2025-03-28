"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { type NewsResponse, fetchNews, type Article } from "@/lib/api"
import NewsList from "./newsList"
import NewsCard from "./newsCard"
import Pagination from "./pagination"
import NewsModal from "@/modal/newsModal"

interface NewsFeedProps {
  initialData: NewsResponse
}

export default function NewsFeed({ initialData }: NewsFeedProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page") || "1")
  const viewMode = searchParams.get("view") || "card"

  const [news, setNews] = useState<NewsResponse>(initialData)
  const [loading, setLoading] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePageChange = async (page: number) => {
    setLoading(true)
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    router.push(`?${params.toString()}`)

    try {
      const newData = await fetchNews(page)
      setNews(newData)
    } catch (error) {
      console.error("Error changing page:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const totalPages = Math.ceil(news.totalResults / 6)

  return (
    <div className="max-w-7xl mx-auto">
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.articles.map((article, index) => (
            <NewsCard key={index} article={article} onClick={handleArticleClick} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {news.articles.map((article, index) => (
            <NewsList key={index} article={article} onClick={handleArticleClick} />
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

