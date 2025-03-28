import axios from "axios"

export interface Article {
  source: { id: string | null; name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface NewsResponse {
  status: string
  totalResults: number
  articles: Article[]
}
export async function fetchNews(page = 1, pageSize = 6): Promise<NewsResponse> {
  const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2025-03-26&to=2025-03-26&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=8863508a4aa54e99946799e81d7b9a6d`

  try {
    const response = await axios.get(API_URL)

    return response.data
    
  } catch (error) {
    console.error("Error fetching news:", error)
    return { status: "error", totalResults: 0, articles: [] }
  }
}

