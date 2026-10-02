'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Creator Hub
          </p>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-3 text-sm text-slate-400">
            Manage your videos, monitor performance, and grow your audience.
          </p>
        </header>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Dashboard Coming Soon</h2>
          <p className="text-slate-400">
            Your creator dashboard with analytics, upload management, and performance metrics
            will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
