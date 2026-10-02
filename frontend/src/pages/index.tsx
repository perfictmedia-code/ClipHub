import React, { useState } from 'react';
import { Search, Upload, Menu, X, PlayCircle, TrendingUp, User, LogOut, Clock, Eye, Tag, Globe, Star } from 'lucide-react';

export default function ClipHubLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sample trending clips data
  const trendingClips = [
    {
      id: 1,
      title: 'Modern Business Strategy',
      category: 'Business',
      quality: 'Excellent',
      views: 1250,
      duration: '45s',
      language: 'English',
      thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      creator: 'John Creator'
    },
    {
      id: 2,
      title: 'Web Development Tips',
      category: 'Tech',
      quality: 'Excellent',
      views: 980,
      duration: '60s',
      language: 'English',
      thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      creator: 'Tech Master'
    },
    {
      id: 3,
      title: 'Cooking Pasta Recipe',
      category: 'Food',
      quality: 'Good',
      views: 750,
      duration: '90s',
      language: 'English',
      thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      creator: 'Chef Pro'
    },
    {
      id: 4,
      title: 'Travel Vlog Dubai',
      category: 'Travel',
      quality: 'Excellent',
      views: 1500,
      duration: '120s',
      language: 'English',
      thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      creator: 'Wanderer'
    },
  ];

  const categories = [
    { name: 'Business', icon: '💼', count: 234 },
    { name: 'Education', icon: '📚', count: 456 },
    { name: 'Entertainment', icon: '🎬', count: 789 },
    { name: 'Tech', icon: '💻', count: 345 },
    { name: 'Travel', icon: '✈️', count: 278 },
    { name: 'Food', icon: '🍽️', count: 567 },
    { name: 'Sports', icon: '⚽', count: 432 },
    { name: 'Fashion', icon: '👗', count: 321 },
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Smart Classification',
      description: 'AI-powered automatic categorization of your videos'
    },
    {
      icon: '✨',
      title: 'Quality Scoring',
      description: 'Get automatic quality ratings for your content'
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      description: 'Support for 50+ languages worldwide'
    },
    {
      icon: '⚡',
      title: 'Quick Discovery',
      description: 'Find exactly what you need in seconds'
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <PlayCircle size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ClipHub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition">Home</a>
              <a href="#" className="hover:text-blue-400 transition">Explore</a>
              <a href="#" className="hover:text-blue-400 transition">Categories</a>
              <a href="#" className="hover:text-blue-400 transition">About</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {!isLoggedIn ? (
                <>
                  <button className="px-6 py-2 rounded-lg text-white hover:bg-slate-700 transition">
                    Sign In
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                    Sign Up
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <User size={24} className="cursor-pointer hover:text-blue-400" />
                  <LogOut size={24} className="cursor-pointer hover:text-blue-400" />
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <a href="#" className="block hover:text-blue-400">Home</a>
              <a href="#" className="block hover:text-blue-400">Explore</a>
              <a href="#" className="block hover:text-blue-400">Categories</a>
              <a href="#" className="block hover:text-blue-400">About</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Library of
              <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Short Videos
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              ClipHub is an AI-powered short-video library and discovery platform. Upload, organize, and share your clips with intelligent automatic categorization and quality analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
                <Upload size={20} />
                Upload Video
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition">
                Explore Library
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-400">2.5K+</p>
                <p className="text-slate-400">Videos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">1.2K+</p>
                <p className="text-slate-400">Creators</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400">50+</p>
                <p className="text-slate-400">Languages</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
              
              {/* Main video card */}
              <div className="absolute inset-0 bg-slate-800/80 backdrop-blur rounded-3xl border border-slate-700 p-8 flex flex-col justify-center items-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <PlayCircle size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center">Start Creating</h3>
                <p className="text-slate-300 text-center">Upload your first clip and discover the power of intelligent content organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="relative">
          <div className="flex items-center bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl px-6 py-4">
            <Search size={24} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search clips by title, category, or keywords..."
              className="flex-1 ml-4 bg-transparent outline-none text-white placeholder-slate-500"
            />
            <button className="px-6 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition">
              Search
            </button>
          </div>
          <p className="text-center mt-4 text-slate-400">
            Trending: Business Strategy • Web Development • Cooking • Travel
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose ClipHub?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-12">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition flex flex-col items-center justify-center gap-3"
            >
              <span className="text-4xl group-hover:scale-125 transition">{cat.icon}</span>
              <div>
                <p className="font-semibold">{cat.name}</p>
                <p className="text-xs text-slate-400">{cat.count} videos</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Clips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-12">
          <TrendingUp className="text-blue-400" size={28} />
          <h2 className="text-4xl font-bold">Trending Now</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingClips.map((clip) => (
            <div
              key={clip.id}
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Thumbnail */}
              <div
                className="relative w-full aspect-video bg-gradient-to-br overflow-hidden"
                style={{ background: clip.thumbnail }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                  <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 transition" />
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-semibold">
                  {clip.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold line-clamp-2 group-hover:text-blue-400 transition">
                  {clip.title}
                </h3>

                {/* Quality Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-500/20 border border-green-500/50 rounded text-xs font-semibold text-green-400">
                    {clip.quality}
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-xs font-semibold text-blue-400">
                    {clip.category}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Eye size={14} />
                    <span>{clip.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <span>{clip.language}</span>
                  </div>
                </div>

                {/* Creator */}
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-sm text-slate-300">by <span className="font-semibold text-white">{clip.creator}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50 rounded-3xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Join ClipHub?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Start uploading your short videos today and let AI automatically organize and categorize your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition">
              <Upload size={20} />
              Start Uploading
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <PlayCircle size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ClipHub</span>
              </div>
              <p className="text-slate-400">AI-powered short video library platform</p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">API</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400">
              © 2024 ClipHub. All rights reserved. Made with ❤️ for creators worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
