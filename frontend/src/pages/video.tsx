import React from 'react';

const relatedVideos = [
  { title: 'AI Branding Secrets', category: 'Business', duration: '42s', quality: 'Excellent' },
  { title: 'Designing Better Storytelling', category: 'Education', duration: '58s', quality: 'Excellent' },
  { title: 'Street Food Tour', category: 'Food', duration: '1:12', quality: 'Good' },
  { title: 'Best Travel Shots', category: 'Travel', duration: '1:08', quality: 'Excellent' },
];

export default function VideoDetailPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid xl:grid-cols-[1.4fr_0.6fr] gap-8">
          {/* Main video area */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-4 md:p-5">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">▶</span>
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-blue-200">Now Playing</div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Product Launch Teaser for Modern Brands</h1>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">Business</span>
                  <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">English</span>
                  <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">45s</span>
                  <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">Excellent Quality</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-5 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition">Save</button>
                <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold">Share</button>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-slate-300 leading-relaxed">
                This short-form video presents a modern business launch strategy designed for digital-first brands. The clip focuses on storytelling, product positioning, and fast audience engagement. It is optimized for marketing campaigns and short-form content delivery.
              </p>
            </div>
          </div>

          {/* Sidebar info */}
          <aside className="space-y-6">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-xl font-bold mb-5">Video Details</h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Uploader</span>
                  <span className="text-white font-medium">John Creator</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Published</span>
                  <span className="text-white">2 days ago</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Views</span>
                  <span className="text-white">23,421</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Likes</span>
                  <span className="text-white">5,820</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Language</span>
                  <span className="text-white">English</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Quality Score</span>
                  <span className="text-emerald-400 font-semibold">92/100</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {['marketing', 'brand', 'launch', 'strategy', 'content', 'business'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related videos */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Related Clips</h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {relatedVideos.map((video, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition">
                <div className="aspect-video bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center text-3xl">
                  ▶
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-slate-800 border border-slate-700 px-2 py-1 rounded-full text-slate-300">{video.category}</span>
                    <span className="text-xs font-medium text-emerald-400">{video.quality}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  <div className="mt-3 text-sm text-slate-400">Duration: {video.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
