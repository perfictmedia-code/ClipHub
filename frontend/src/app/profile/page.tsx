'use client';

import React from "react";
import {
  Camera,
  Bell,
  ShieldCheck,
  Play,
  TrendingUp,
  Settings,
  User,
  Mail,
  MapPin,
  Calendar,
  Link2,
  Check,
} from "lucide-react";

const stats = [
  { label: "Total Views", value: "128.4K", icon: TrendingUp, tone: "text-blue-400" },
  { label: "Videos", value: "48", icon: Play, tone: "text-purple-400" },
  { label: "Followers", value: "24.8K", icon: User, tone: "text-emerald-400" },
  { label: "Engagement", value: "8.2%", icon: Bell, tone: "text-amber-400" },
];

const recentVideos = [
  { title: "AI Brand Strategy", category: "Business", duration: "00:42", status: "Published" },
  { title: "Street Food Story", category: "Food", duration: "01:12", status: "Draft" },
  { title: "Travel Motion Reel", category: "Travel", duration: "00:58", status: "Published" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-2xl font-bold">
                J
              </div>
              <button className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-white hover:bg-slate-800 transition">
                <Camera size={16} />
              </button>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-blue-400">Creator Profile</p>
              <h1 className="mt-2 text-4xl font-bold">John Creator</h1>
              <p className="mt-2 text-slate-400">@johncreator • Verified Creator</p>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-600">
            <Settings size={16} />
            Edit Profile
          </button>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, tone }) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className={`rounded-xl bg-slate-800 p-2.5 ${tone}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Live</span>
              </div>
              <div className="text-3xl font-bold">{value}</div>
              <div className="mt-2 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">About</h2>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="text-slate-400" size={18} />
                  <span>johncreator@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-slate-400" size={18} />
                  <span>Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-slate-400" size={18} />
                  <span>Joined January 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link2 className="text-slate-400" size={18} />
                  <span>johncreator.io</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">Verification</h2>
              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                <ShieldCheck size={18} />
                Verified Creator
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">Recent Uploads</h2>
              <div className="space-y-4">
                {recentVideos.map((video) => (
                  <div
                    key={video.title}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
                        <Play size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{video.title}</h3>
                        <p className="text-sm text-slate-400">
                          {video.category} • {video.duration}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                        video.status === "Published"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      {video.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">Creator Notes</h2>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
                Focus on storytelling, authenticity, and high-quality short-form content.
                Consistency and audience trust are key to long-term growth on ClipHub.
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
