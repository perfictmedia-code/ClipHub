import React from 'react';

const stats = [
  { label: 'Total Videos', value: '128', color: 'text-blue-400', trend: '+12.4%' },
  { label: 'Total Views', value: '24.8K', color: 'text-emerald-400', trend: '+18.1%' },
  { label: 'Favorites', value: '1.3K', color: 'text-violet-400', trend: '+8.7%' },
  { label: 'Avg. Score', value: '91/100', color: 'text-amber-400', trend: '+4.9%' },
];

const videos = [
  { title: 'Product Launch Teaser', category: 'Business', quality: 'Excellent', views: 2321, status: 'Published', date: '2 days ago' },
  { title: 'AI Marketing Tips', category: 'Tech', quality: 'Excellent', views: 1640, status: 'Published', date: '5 days ago' },
  { title: 'New Travel Story', category: 'Travel', quality: 'Good', views: 980, status: 'Pending', date: '1 week ago' },
  { title: 'Healthy Meal Prep', category: 'Food', quality: 'Good', views: 1150, status: 'Published', date: '2 weeks ago' },
];

const recentActivities = [
  'Your upload “AI Marketing Tips” was approved',
  'New comment received on “Product Launch Teaser”',
  'Custom tag suggestion generated for “New Travel Story”',
  'Video quality score improved by 5 points',
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <p className="uppercase text-sm tracking-[0.2em] text-blue-400">Dashboard</p>
            <h1 className="text-4xl font-bold mt-2">Creator Overview</h1>
          </div>

          <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition">
            Upload New Video
          </button>
        </div>

        {/* Stats row */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
              <div className="text-slate-400 text-sm">{stat.label}</div>
              <div className="flex items-end justify-between mt-4">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-full">
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Recent uploads table */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Uploads</h2>
              <button className="text-blue-400 text-sm hover:text-blue-300">View all</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-slate-400 border-b border-slate-700">
                  <tr>
                    <th className="pb-3 font-medium">Title</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">Quality</th>
                    <th className="pb-3 font-medium">Views</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video) => (
                    <tr key={video.title} className="border-b border-slate-800 last:border-0">
                      <td className="py-4 pr-4">
                        <div className="font-medium">{video.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{video.date}</div>
                      </td>
                      <td className="py-4 pr-4 text-slate-300">{video.category}</td>
                      <td className="py-4 pr-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${video.quality === 'Excellent' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'}`}>
                          {video.quality}
                        </span>
                      </td>
                      <td className="py-4 pr-4 text-slate-300">{video.views.toLocaleString()}</td>
                      <td className="py-4 pr-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${video.status === 'Published' ? 'bg-blue-500/10 border border-blue-500/30 text-blue-300' : 'bg-amber-500/10 border border-amber-500/30 text-amber-300'}`}>
                          {video.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity panel */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-5">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-5">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition text-left">
                  Optimize upload metadata
                </button>
                <button className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition text-left">
                  Review AI suggestions
                </button>
                <button className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition text-left">
                  Manage saved clips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
