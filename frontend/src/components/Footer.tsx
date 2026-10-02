import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                C
              </div>
              <span className="text-lg font-bold text-white">ClipHub</span>
            </div>
            <p className="text-sm text-slate-500">
              Your platform for discovering and sharing exceptional short-form videos.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/library" className="hover:text-white">
                  Video Library
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-white">
                  Upload Videos
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Creator Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} ClipHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
