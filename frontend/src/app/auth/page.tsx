'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Chrome, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex items-center justify-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Welcome back
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">
              {isLogin ? "Sign in to your creator account" : "Create your ClipHub account"}
            </h1>
            <p className="mt-5 text-lg text-slate-400">
              Publish, discover, and grow with a community built for short-form creators.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Upload and manage your videos",
                "Track performance and audience growth",
                "Connect with creators and brands",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur">
            <div className="mb-6 flex rounded-xl border border-slate-700 bg-slate-950 p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  isLogin
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  !isLogin
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-3">
                    <Mail className="text-slate-500" size={18} />
                    <input
                      placeholder="Your name"
                      className="w-full border-0 bg-transparent text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-3">
                  <Mail className="text-slate-500" size={18} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-0 bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-3">
                  <Lock className="text-slate-500" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full border-0 bg-transparent text-white outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-400">
                    <input type="checkbox" className="rounded border-slate-600 bg-slate-900" />
                    Remember me
                  </label>
                  <Link href="#" className="text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110">
                {isLogin ? "Sign In" : "Create Account"}
              </button>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-px w-full bg-slate-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span className="bg-slate-900 px-2">Or continue with</span>
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:border-slate-600">
                <Chrome size={18} />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
