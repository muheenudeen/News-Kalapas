"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import { ChevronDown, LayoutGrid, List, LogOut, Settings, User } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const viewMode = searchParams.get("view") || "card"
  const [showProfile, setShowProfile] = useState(false)

  const setViewMode = (mode: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("view", mode)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="w-[320px] bg-yellow-50 p-4 flex flex-col gap-4 h-screen">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src="/avathar.png?height=80&width=80" alt="User" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">Hi Reader,</h2>
            <p className="text-slate-600">Here's your News!</p>
          </div>
          <ChevronDown className={`text-slate-400 transition-transform ${showProfile ? "rotate-180" : ""}`} />
        </div>

        {showProfile && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-slate-700"
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-slate-700"
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 text-slate-700"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">View Toggle</h2>
        <div className="flex rounded-md overflow-hidden">
          <button
            onClick={() => setViewMode("card")}
            className={`flex-1 py-3 flex justify-center items-center transition-colors ${
              viewMode === "card" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
            }`}
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex-1 py-3 flex justify-center items-center transition-colors ${
              viewMode === "list" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Have a Feedback?</h2>
        <Link href="/feedBack">
          <button className="w-full py-3 bg-emerald-200 text-emerald-700 rounded-md font-medium hover:bg-emerald-300 transition-colors">
            We&apos;re Listening!
          </button>
        </Link>
      </div>
    </div>
  )
}

