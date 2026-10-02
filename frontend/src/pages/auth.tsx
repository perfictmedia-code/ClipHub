import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-700 shadow-2xl shadow-blue-950/30">
        {/* Left side promotional area */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-950 p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),transparent_40%)]"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-2xl">
                ▶
              </div>
              <span className="text-3xl font-bold">ClipHub</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight">
              Discover short-form video content in minutes.
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 max-w-md">
              Upload, organize, and explore high-quality short videos with automatic classification and multilingual support.
            </p>
          </div>

          <div className="relative z-10 mt-10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur">
                <div className="text-3xl font-bold">2.5K+</div>
                <div className="text-sm text-blue-100">Videos</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur">
                <div className="text-3xl font-bold">1.2K+</div>
                <div className="text-sm text-blue-100">Creators</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-100">Languages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side form area */}
        <div className="bg-slate-900/90 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                {isLogin ? 'Welcome back' : 'Create account'}
              </h2>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>

            <div className="flex rounded-xl border border-slate-700 p-1 mb-8 bg-slate-800/70">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-lg font-medium transition ${
                  isLogin ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-lg font-medium transition ${
                  !isLogin ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Confirm password</label>
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-400 hover:text-blue-300">Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span className="bg-slate-900 px-3">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 hover:border-slate-500 transition">
                  Google
                </button>
                <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 hover:border-slate-500 transition">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
