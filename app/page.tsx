export default function Home() {
  return (
    <div className="min-h-screen px-4 pb-14 pt-34 text-zinc-100 sm:px-8">
      <main className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-10">
        <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">
          devfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Build a premium personal portfolio in minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Your top navigation is now in place. Next we can wire dropdown menus,
          animate interactions, and connect this landing section to project data.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Theme</p>
            <p className="mt-3 text-xl font-medium text-zinc-100">Noir Glass</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Sections</p>
            <p className="mt-3 text-xl font-medium text-zinc-100">Home + Works</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Status</p>
            <p className="mt-3 text-xl font-medium text-zinc-100">Navbar Ready</p>
          </div>
        </div>
      </main>
    </div>
  );
}
