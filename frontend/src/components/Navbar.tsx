import React from "react";
import Link from "next/link";
import { Menu, X, Search, Upload, User, LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">
              C
            </div>
            <span className="hidden text-xl font-bold text-white sm:inline">ClipHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/library"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Library
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/admin"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Admin
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-500">
              <Search size={16} />
              Search
            </button>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              <Upload size={16} />
              Upload
            </Link>
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-800 p-2 text-slate-300 transition hover:bg-slate-700">
              <User size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex md:hidden"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="space-y-3">
              <Link
                href="/library"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Library
              </Link>
              <Link
                href="/dashboard"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Dashboard
              </Link>
              <Link
                href="/admin"
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
              >
                Admin
              </Link>
              <div className="space-y-2 border-t border-slate-800 pt-3">
                <Link
                  href="/upload"
                  className="block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 text-sm font-medium text-white"
                >
                  Upload Video
                </Link>
                <button className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
