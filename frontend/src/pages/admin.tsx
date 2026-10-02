import React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  Video,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { label: "Total videos", value: "2,845", icon: Video, tone: "text-blue-400" },
  { label: "Pending review", value: "128", icon: AlertTriangle, tone: "text-amber-400" },
  { label: "Flagged", value: "18", icon: ShieldCheck, tone: "text-red-400" },
  { label: "Active creators", value: "1,240", icon: Users, tone: "text-emerald-400" },
];

const moderationQueue = [
  { title: "Product Launch Teaser", creator: "John Creator", category: "Business", quality: "Excellent", status: "Pending" },
  { title: "Street Food Adventure", creator: "Chef Pro", category: "Food", quality: "Good", status: "Pending" },
  { title: "Travel Morning Reel", creator: "Wanderer", category: "Travel", quality: "Excellent", status: "Flagged" },
  { title: "Workout Clip 12", creator: "Fitness Coach", category: "Lifestyle", quality: "Good", status: "Approved" },
];

const recentActivity = [
  "New 14 clips submitted for review",
  "3 videos flagged for policy concerns",
  "Creator John Creator upgraded to verified status",
  "System auto-classified 26 new videos",
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-400">Admin Panel</p>
          <h1 className="mt-2 text-4xl font-bold">Moderation Dashboard</h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, tone }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
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
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.6fr_0.8fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Moderation queue</h2>
              <button className="text-sm text-blue-400 hover:text-blue-300">View all</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-slate-800 text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Creator</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Quality</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {moderationQueue.map((item) => (
                    <tr key={item.title} className="border-b border-slate-800 last:border-b-0">
                      <td className="px-4 py-4 font-medium text-white">{item.title}</td>
                      <td className="px-4 py-4 text-slate-300">{item.creator}</td>
                      <td className="px-4 py-4 text-slate-300">{item.category}</td>
                      <td className="px-4 py-4">
                        <span className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                          item.quality === "Excellent"
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                            : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                        }`}>
                          {item.quality}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`rounded-full border px-2 py-1 text-[11px] font-medium ${
                          item.status === "Pending"
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                            : item.status === "Flagged"
                            ? "border-red-500/30 bg-red-500/10 text-red-300"
                            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-2 text-emerald-300 hover:bg-emerald-500/20">
                            <CheckCircle2 size={16} />
                          </button>
                          <button className="rounded-lg bg-red-500/10 border border-red-500/30 p-2 text-red-300 hover:bg-red-500/20">
                            <XCircle size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">System activity</h2>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-800/60 p-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-5 text-xl font-semibold">Top creators</h2>
              <div className="space-y-4">
                {[
                  ["John Creator", "2.8K views"],
                  ["Tech Master", "2.1K views"],
                  ["Wanderer", "1.9K views"],
                ].map(([name, views], index) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-semibold">
                        {name.slice(0, 1)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{name}</p>
                        <p className="text-xs text-slate-400">{views}</p>
                      </div>
                    </div>
                    <div className="text-xs text-blue-300">#{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
