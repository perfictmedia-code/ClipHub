'use client';

import React from "react";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredCategories = [
  {
    name: "Business",
    count: 245,
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Technology",
    count: 189,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Lifestyle",
    count: 312,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Entertainment",
    count: 428,
    color: "from-pink-500 to-rose-600",
  },
];

const featuredVideos = [
  {
    id: 1,
    title: "Product Launch Story",
    creator: "John Creator",
    category: "Business",
    duration: "00:45",
    views: 2340,
    accent: "from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    id: 2,
    title: "AI Marketing Essentials",
    creator: "Tech Master",
    category: "Tech",
    duration: "00:58",
    views: 1890,
    accent: "from-cyan-500 via-sky-600 to-indigo-700",
  },
  {
    id: 3,
    title: "Street Food Adventure",
    creator: "Chef Pro",
    category: "Food",
    duration: "01:12",
    views: 980,
    accent: "from-orange-500 via-rose-500 to-pink-600",
  },
  {
    id: 4,
    title: "Dubai Travel Highlights",
    creator: "Wanderer",
    category: "Travel",
    duration: "01:20",
    views: 3220,
    accent: "from-violet-600 via-fuchsia-600 to-pink-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Welcome to ClipHub
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Discover Exceptional
            <br />
            Short-Form Content
          </h1>
          <p className="mb-8 text-lg text-slate-400 md:text-xl">
            Explore thousands of curated videos. Upload your best moments. Build your
            creative community.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <Link
              href="/library"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              <Play size={20} />
              Explore Videos
            </Link>
            <Link
              href="/upload"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 text-lg font-semibold text-white transition hover:border-slate-600"
            >
              Start Uploading
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-800 px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: "Total Videos", value: "2,845+" },
              { label: "Active Creators", value: "1,240+" },
              { label: "Monthly Views", value: "125K+" },
              { label: "Content Categories", value: "18+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="mt-2 text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                Explore
              </p>
              <h2 className="text-3xl font-bold">Featured Categories</h2>
            </div>
            <Link
              href="/library"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category) => (
              <Link
                key={category.name}
                href={`/library?category=${category.name}`}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/40"
              >
                <div
                  className={`h-24 w-full rounded-lg bg-gradient-to-br ${category.color} mb-4`}
                />
                <h3 className="text-xl font-semibold group-hover:text-blue-300">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{category.count} videos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                New
              </p>
              <h2 className="text-3xl font-bold">Featured Videos</h2>
            </div>
            <Link
              href="/library"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredVideos.map((video) => (
              <Link
                key={video.id}
                href={`/video/${video.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div
                  className={`relative aspect-video overflow-hidden bg-gradient-to-br ${video.accent}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                      <Play className="ml-1 text-white" size={20} />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-lg font-semibold group-hover:text-blue-300">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{video.creator}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>{video.category}</span>
                    <span>{video.views.toLocaleString()} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Create?</h2>
            <p className="mb-8 text-lg text-slate-400">
              Join thousands of creators sharing their best content with the world.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              Upload Your First Video
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
