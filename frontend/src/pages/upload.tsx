import React, { useState } from 'react';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Business');
  const [language, setLanguage] = useState('English');
  const [tags, setTags] = useState('marketing, short-form, strategy');

  const categories = ['Business', 'Education', 'Tech', 'Travel', 'Food', 'Fashion', 'Sports', 'Lifestyle'];
  const languages = ['English', 'Arabic', 'Spanish', 'French', 'German', 'Turkish', 'Hindi'];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Creator Tools</p>
          <h1 className="text-4xl font-bold mt-3">Upload your short video</h1>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Upload form */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8">
            <div className="border-2 border-dashed border-slate-600 rounded-2xl bg-slate-800/60 p-10 text-center hover:border-blue-500 transition">
              <div className="text-5xl mb-4">🎬</div>
              <p className="text-xl font-semibold">Drop your video here</p>
              <p className="text-slate-400 mt-2">MP4, MOV, AVI, MKV up to 500MB</p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold">
                Choose File
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Product launch teaser"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your short video, key message, and target audience"
                  rows={5}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 outline-none"
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 outline-none"
                  >
                    {languages.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tags</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition">
                  Save Draft
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition">
                  Publish Clip
                </button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-5">Upload Review</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Format</span>
                  <span className="text-white">MP4</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Duration</span>
                  <span className="text-white">00:45</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Resolution</span>
                  <span className="text-white">1920x1080</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Quality</span>
                  <span className="text-emerald-400 font-medium">Excellent</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Category</span>
                  <span className="text-white">{category}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Language</span>
                  <span className="text-white">{language}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-5">AI Suggestions</h3>
              <div className="space-y-3">
                <div className="rounded-xl bg-slate-800 p-3 border border-slate-700">
                  <p className="text-sm text-slate-300">Suggested tags:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['marketing', 'brand strategy', 'short video', 'content'].map(item => (
                      <span key={item} className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs">
                        #{item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800 p-3 border border-slate-700">
                  <p className="text-sm text-slate-300">Recommended title:</p>
                  <p className="mt-2 text-white font-medium">Product Launch Teaser for Modern Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
