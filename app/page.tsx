const quickStats = [
  { value: "07+", label: "Years designing for the web" },
  { value: "120", label: "Products and websites shipped" },
  { value: "2.8x", label: "Average conversion uplift" },
  { value: "24h", label: "Response time for new inquiries" },
];

const signalCards = [
  {
    title: "Identity + Product",
    text: "I build cohesive brands that carry from visual direction to production-ready interfaces.",
  },
  {
    title: "Motion + Interactions",
    text: "Micro-interactions, smooth transitions, and strategic pacing to make each screen feel alive.",
  },
];

const services = [
  "Brand Systems",
  "Portfolio Design",
  "Next.js Builds",
  "UX Audits",
  "GSAP Motion",
  "Design Direction",
];

const wins = [
  "Redesigned a portfolio that lifted lead quality by 61%.",
  "Built a launch page that crossed 1M impressions in 3 weeks.",
  "Shipped a design system used across 4 product teams.",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-4 pb-20 pt-34 text-zinc-100 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,138,55,0.24),rgba(255,138,55,0))] blur-3xl" />
        <div className="absolute -right-24 top-10 h-[27rem] w-[27rem] rounded-full bg-[radial-gradient(circle,rgba(76,228,209,0.2),rgba(76,228,209,0))] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0))] blur-3xl" />
      </div>

      <section className="grid-noise mx-auto grid w-full max-w-[1220px] gap-4 rounded-[30px] border border-white/10 bg-[#0c1118]/85 p-4 shadow-[0_32px_96px_rgba(0,0,0,0.48)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.2fr_0.9fr] lg:p-6">
        <aside className="rounded-[24px] border border-white/10 bg-[linear-gradient(155deg,rgba(24,31,43,0.9),rgba(10,13,18,0.95))] p-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-400">
            Creative profile
          </p>

          <div className="relative mx-auto mt-8 flex h-[250px] w-[250px] items-center justify-center">
            <div className="animate-slow-spin absolute inset-0 rounded-full border border-white/15 bg-[conic-gradient(from_215deg,rgba(255,146,62,0.62),rgba(78,220,202,0.36),rgba(255,146,62,0.62))] opacity-80" />
            <div className="relative flex h-[222px] w-[222px] items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_32%_24%,#20293b,#0a0f16_70%)] shadow-[0_20px_52px_rgba(0,0,0,0.45)]">
              <span className="animate-pulse-glow absolute -top-3 right-4 rounded-full border border-emerald-300/40 bg-emerald-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                available
              </span>
              <div className="flex h-[152px] w-[152px] items-center justify-center rounded-full bg-[linear-gradient(150deg,#f2c285,#c36d1f_50%,#683307)] text-4xl font-semibold tracking-[0.16em] text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]">
                ZA
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {quickStats.slice(0, 2).map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-3"
              >
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{stat.label}</p>
              </article>
            ))}
          </div>
        </aside>

        <article className="rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,rgba(17,23,34,0.95),rgba(10,12,18,0.92))] p-7 sm:p-9">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
            Monogram inspired
          </p>

          <h1 className="font-display mt-6 text-4xl leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Portfolio design with cinematic depth and confident typography.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I craft premium digital identities for founders, creators, and modern
            teams. The focus is always the same: clear storytelling, smooth
            motion, and a look that feels unmistakably yours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-amber-200/40 bg-[linear-gradient(120deg,#f6af58,#e9852e)] px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              View selected work
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/[0.08]"
            >
              Download portfolio deck
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {signalCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.text}</p>
              </article>
            ))}
          </div>
        </article>

        <aside className="grid gap-4">
          <article className="rounded-[24px] border border-white/10 bg-[linear-gradient(170deg,rgba(21,28,39,0.92),rgba(13,17,24,0.95))] p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
              Core services
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-200"
                >
                  {service}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-emerald-300/20 bg-[linear-gradient(145deg,rgba(24,34,33,0.94),rgba(8,17,16,0.98))] p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/80">
              Now booking
            </p>
            <p className="mt-2 text-3xl font-semibold text-white">Q3 2026</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Two collaboration slots left for portfolio redesigns and product
              launch websites.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex rounded-xl border border-emerald-300/35 bg-emerald-300/15 px-4 py-2 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-300/25"
            >
              Start a project
            </a>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-[linear-gradient(155deg,rgba(21,25,34,0.94),rgba(11,14,20,0.95))] p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
              Recent wins
            </p>
            <ul className="mt-4 space-y-3">
              {wins.map((win) => (
                <li key={win} className="text-sm leading-relaxed text-zinc-300">
                  {win}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {quickStats.slice(2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-black/20 p-3"
                >
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}
