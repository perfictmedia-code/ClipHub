'use client';

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Upload
          </p>
          <h1 className="text-4xl font-bold">Upload Video</h1>
          <p className="mt-3 text-sm text-slate-400">
            Share your best short-form content with the ClipHub community.
          </p>
        </header>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="rounded-xl border-2 border-dashed border-slate-700 px-8 py-16 text-center">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
                <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Drag and drop your video</h3>
            <p className="mt-2 text-slate-400">or click to browse from your device</p>
            <p className="mt-4 text-sm text-slate-500">
              Supported formats: MP4, WebM, Mov | Max size: 500MB | Duration: 15s - 5min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
