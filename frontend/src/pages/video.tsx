import React from "react";
import { Clock3, Eye, Share2, Bookmark, Play, User } from "lucide-react";

const relatedVideos = [
  {
    id: 1,
    title: "AI Branding Secrets",
    category: "Business",
    duration: "00:42",
    quality: "Excellent",
    accent: "from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    id: 2,
    title: "Designing Better Storytelling",
    category: "Education",
    duration: "00:58",
    quality: "Excellent",
    accent: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    id: 3,
    title: "Street Food Tour",
    category: "Food",
    duration: "01:12",
    quality: "Good",
    accent: "from-orange-500 via-yellow-500 to-red-500",
  },
  {
    id: 4,
    title: "Best Travel Shots",
    category: "Travel",
    duration: "01:08",
    quality: "Excellent",
    accent: "from-violet-500 via-pink-500 to-rose-600",
  },
];

export default function VideoDetailPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.7fr_0.9fr]">
          <main>
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                    <Play className="ml-1" size={32} />
                  </div>
                </div>

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-100">
                  Now playing
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white">
                  00:45
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold md:text-4xl">
                    Product Launch Teaser for Modern Brands
                  </h1>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                      Business
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                      English
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                      00:45
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                      Excellent Quality
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-200 transition hover:border-slate-500">
                    <Bookmark size={16} />
                    Save
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h2 className="mb-3 text-xl font-semibold">Description</h2>
                <p className="leading-7 text-slate-300">
                  This short-form video presents a modern product launch strategy designed
                  for digital-first brands. The clip highlights the importance of story
                  positioning, creator-led messaging, and a highly engaged audience
                  experience. It is optimized for marketing teams and short-form content
                  campaigns.
                </p>
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">Video details</h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Creator</span>
                  <span className="font-medium text-white">John Creator</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Published</span>
                  <span className="text-white">2 days ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Views</span>
                  <span className="text-white">23,421</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Likes</span>
                  <span className="text-white">5,820</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Language</span>
                  <span className="text-white">English</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Quality Score</span>
                  <span className="font-semibold text-emerald-400">92/100</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {"marketing, brand, launch, strategy, content, business".split(", ").map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <User size={18} />
                </div>
                <div>
                  <p className="font-semibold">John Creator</p>
                  <p className="text-sm text-slate-400">Verified creator</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Related clips</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">View all</button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedVideos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-blue-500/40"
              >
                <div
                  className={`relative aspect-video bg-gradient-to-br ${video.accent}`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                      <Play size={18} />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300">
                      {video.category}
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
                      {video.quality}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
