import { fetchNews } from "@/lib/api"
import NewsFeed from "@/components/newsFeed"
import Sidebar from "@/components/sidebar"

export default async function Home() {
  const initialData = await fetchNews(1, 6)

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 p-4">
        <NewsFeed initialData={initialData} />
      </main>
    </div>
  )
}

