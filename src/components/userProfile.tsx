'use client'
import Image from "next/image"
import { MessageCircle, Users, Heart, Calendar, MapPin, Link, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white text-black p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white border shadow-xl overflow-hidden rounded-lg">
        <div className="h-40 bg-gradient-to-r from-purple-600 to-blue-500 relative">
          <div className="absolute -bottom-16 left-8">
            <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32">
              <Image
                src="/avathar.png?height=128&width=128"
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-6 px-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">Hi Reader,</h1>
              <p className="text-gray-600">@reader</p>
            </div>
            <div className="flex gap-3">
              <button className="border border-purple-500 text-purple-500 hover:bg-purple-500/10 px-4 py-2 rounded">Message</button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Follow</button>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-700 mb-6">
            UI/UX Designer & Creative Director. Passionate about creating beautiful, functional interfaces that people
            love to use.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">248</p>
              <p className="text-gray-600 text-sm">Posts</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">12.4k</p>
              <p className="text-gray-600 text-sm">Followers</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">364</p>
              <p className="text-gray-600 text-sm">Following</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">UI Design</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">UX Research</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">Branding</span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Product Design</span>
          </div>

          <hr className="my-6 bg-gray-300" />

          <div className="grid gap-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={18} className="text-gray-600" />
              <span>San Francisco, California</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Link size={18} className="text-gray-600" />
              <span>jessicathompson.design</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar size={18} className="text-gray-600" />
              <span>Joined March 2018</span>
            </div>
          </div>

          <hr className="my-6 bg-gray-300" />

          {/* Social Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <MessageCircle size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="font-medium">1,248</p>
                <p className="text-xs text-gray-600">Comments</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Heart size={20} className="text-pink-400" />
              </div>
              <div>
                <p className="font-medium">4.3k</p>
                <p className="text-xs text-gray-600">Likes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Users size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="font-medium">562</p>
                <p className="text-xs text-gray-600">Connections</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Twitter size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="font-medium">8.2k</p>
                <p className="text-xs text-gray-600">Followers</p>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" onClick={() => router.push("/")}>Go to Home</button>
        </div>
      </div>
    </main>
  )
}
