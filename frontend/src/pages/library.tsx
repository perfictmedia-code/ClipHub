import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Grid2x2,
  List,
  ChevronDown,
  Play,
  Clock3,
  Eye,
} from "lucide-react";

type Video = {
  id: number;
  title: string;
  category: string;
  quality: "Excellent" | "Good";
  language: string;
  duration: string;
  views: number;
  creator: string;
  accent: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Product Launch Story",
    category: "Business",
    quality: "Excellent",
    language: "English",
    duration: "00:45",
    views: 2340,
    creator: "John Creator",
    accent: "from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    id: 2,
    title: "AI Marketing Essentials",
    category: "Tech",
    quality: "Excellent",
    language: "English",
    duration: "00:58",
    views: 1890,
    creator: "Tech Master",
    accent: "from-cyan-500 via-sky-600 to-indigo-700",
  },
  {
    id: 3,
    title: "Street Food Adventure",
    category: "Food",
    quality: "Good",
    language: "English",
    duration: "01:12",
    views: 980,
    creator: "Chef Pro",
    accent: "from-orange-500 via-rose-500 to-pink-600",
  },
  {
    id: 4,
    title: "Dubai Travel Highlights",
    category: "Travel",
    quality: "Excellent",
    language: "English",
    duration: "01:20",
    views: 3220,
    creator: "Wanderer",
    accent: "from-violet-600 via-fuchsia-600 to-pink-600",
  },
  {
    id: 5,
    title: "Smart Fashion Styling",
    category: "Fashion",
    quality: "Excellent",
    language: "English",
    duration: "00:51",
    views: 1490,
    creator: "Style Icon",
    accent: "from-rose-500 via-pink-500 to-purple-700",
  },
  {
    id: 6,
    title: "Beginner Design Crash Course",
    category: "Education",
    quality: "Good",
    language: "English",
    duration: "01:05",
    views: 1180,
    creator: "Design Coach",
    accent: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    id: 7,
    title: "Morning Fitness Flow",
    category: "Lifestyle",
    quality: "Excellent",
    language: "English",
    duration: "00:39",
    views: 2140,
    creator: "Fitness Coach",
    accent: "from-green-500 via-lime-500 to-emerald-600",
  },
  {
    id: 8,
    title: "Basketball Match Highlights",
    category: "Sports",
    quality: "Excellent",
    language: "English",
    duration: "01:01",
    views: 2870,
    creator: "Sports Zone",
    accent: "from-red-500 via-orange-500 to-yellow-500",
  },
];

const categories = [
  "All",
  "Business",
  "Tech",
  "Food",
  "Travel",
  "Fashion",
  "Education",
  "Lifestyle",
  "Sports",
];

export default function VideoLibraryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [qualityFilter, setQualityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("trending");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredVideos = useMemo(() => {
    const filtered = videos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.creator.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || video.category === selectedCategory;

      const matchesQuality =
        qualityFilter === "All" || video.quality === qualityFilter;

      return matchesSearch && matchesCategory && matchesQuality;
    });

    switch (sortBy) {
      case "views":
        return [...filtered].sort((a, b) => b.views - a.views);
      case "newest":
        return filtered;
      case "quality":
        return [...filtered].sort((a, b) =>
          a.quality === b.quality ? 0 : a.quality === "Excellent" ? -1 : 1
        );
      default:
        return [...filtered].sort((a, b) => b.views - a.views);
    }
  }, [search, selectedCategory, qualityFilter, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Video Library
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Discover short videos
          </h1>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Browse {videos.length}+ curated short clips, ranked by quality and relevance.
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 backdrop-blur">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search videos, titles, or creators..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-300 transition hover:border-blue-500">
                <SlidersHorizontal size={16} />
                Filter
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                  viewMode === "grid"
                    ? "border-blue-500 bg-blue-600/10 text-blue-300"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
                }`}
              >
                <Grid2x2 size={16} />
                Grid
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                  viewMode === "list"
                    ? "border-blue-500 bg-blue-600/10 text-blue-300"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
                }`}
              >
                <List size={16} />
                List
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 pr-9 text-sm text-slate-200 outline-none focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={qualityFilter}
                onChange={(e) => setQualityFilter(e.target.value)}
                className="appearance-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 pr-9 text-sm text-slate-200 outline-none focus:border-blue-500"
              >
                <option value="All">All quality</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 pr-9 text-sm text-slate-200 outline-none focus:border-blue-500"
              >
                <option value="trending">Trending</option>
                <option value="views">Most viewed</option>
                <option value="quality">Top quality</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Showing <span className="font-medium text-white">{filteredVideos.length}</span>{" "}
            videos
          </p>
        </div>

        {viewMode === "grid" ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div
                  className={`relative aspect-video overflow-hidden bg-gradient-to-br ${video.accent}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                      <Play className="ml-1 text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-300">
                      {video.category}
                    </span>

                    <span
                      className={`rounded-full border px-2 py-1 text-[10px] font-medium ${
                        video.quality === "Excellent"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      {video.quality}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-lg font-semibold text-white group-hover:text-blue-300">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Eye size={12} />
                      {video.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={12} />
                      {video.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-300">
                    <span>{video.creator}</span>
                    <span>{video.language}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b border-slate-800 bg-slate-900">
                  <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-400">
                    <th className="px-5 py-4">Video</th>
                    <th className="px-5 py-4">Category</th>
                    <th className="px-5 py-4">Quality</th>
                    <th className="px-5 py-4">Duration</th>
                    <th className="px-5 py-4">Views</th>
                    <th className="px-5 py-4">Creator</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVideos.map((video) => (
                    <tr
                      key={video.id}
                      className="border-b border-slate-800 text-sm text-slate-200 last:border-b-0 hover:bg-slate-800/50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-12 w-20 rounded-lg bg-gradient-to-br ${video.accent}`}
                          />
                          <div>
                            <p className="font-medium text-white">{video.title}</p>
                            <p className="text-xs text-slate-400">{video.language}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">{video.category}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                            video.quality === "Excellent"
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                              : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                          }`}
                        >
                          {video.quality}
                        </span>
                      </td>
                      <td className="px-5 py-4">{video.duration}</td>
                      <td className="px-5 py-4">{video.views.toLocaleString()}</td>
                      <td className="px-5 py-4">{video.creator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredVideos.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 py-16 text-center">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
                <Search className="text-slate-400" size={26} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">No videos found</h3>
            <p className="mt-2 text-slate-400">
              Try changing the filters or searching for a different keyword.
            </p>
          </div>
        )}

        <div className="mt-10 flex items-center justify-center gap-3">
          <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500">
            Previous
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`h-10 w-10 rounded-xl text-sm ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
