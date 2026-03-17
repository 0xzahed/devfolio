import Link from "next/link";
import {
  ChevronDownIcon,
  MoonIcon,
  SearchIcon,
  SendIcon,
  WaveIcon,
} from "./Icons";

type NavItem = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  badge?: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Pages", hasDropdown: true },
  { label: "Works", hasDropdown: true, badge: "32" },
  { label: "Blog", hasDropdown: true },
  { label: "Contact", hasDropdown: true },
];

function NavItemChip({ item, mobile = false }: { item: NavItem; mobile?: boolean }) {
  const baseClasses =
    "inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition-colors";

  const stateClasses = item.active
    ? "bg-white/10 text-white"
    : "hover:bg-white/6 hover:text-white";

  const classes = `${baseClasses} ${stateClasses} ${mobile ? "shrink-0" : ""}`;

  const content = (
    <>
      {item.badge ? (
        <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] leading-none tracking-wide text-zinc-200">
          {item.badge}
        </span>
      ) : null}
      <span>{item.label}</span>
      {item.hasDropdown ? (
        <ChevronDownIcon className="h-3.5 w-3.5 text-zinc-500" />
      ) : null}
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
      <div className="pointer-events-none mx-auto flex w-full max-w-[1180px] flex-col gap-2">
        <div className="pointer-events-auto flex items-center gap-2 rounded-[18px] border border-white/10 bg-[linear-gradient(120deg,rgba(20,23,28,0.96),rgba(13,15,19,0.92))] px-2 py-2 shadow-[0_22px_56px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <Link
            href="/"
            className="shrink-0 rounded-xl border border-white/10 bg-black/45 px-4 py-2 text-xl font-semibold tracking-[-0.02em] text-white"
          >
            monogram
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavItemChip key={item.label} item={item} />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10 md:inline-flex"
            >
              <span className="text-base leading-none" aria-hidden="true">
                🇺🇸
              </span>
              <span>English</span>
              <ChevronDownIcon className="h-3.5 w-3.5 text-zinc-500" />
            </button>

            <button
              type="button"
              aria-label="Theme toggle"
              className="hidden h-10 items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 text-zinc-200 transition-colors hover:bg-white/10 sm:inline-flex"
            >
              <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-black/50 px-0.5">
                <span className="ml-auto h-4 w-4 rounded-full bg-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.2)]" />
              </span>
              <MoonIcon className="h-4 w-4 text-zinc-300" />
            </button>

            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-[#151920] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1d2330]"
            >
              <span>Hire me</span>
              <SendIcon className="h-4 w-4 text-emerald-400" />
            </button>

            <button
              type="button"
              aria-label="Audio waves"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-100 transition-colors hover:bg-white/[0.08] lg:inline-flex"
            >
              <WaveIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-100 transition-colors hover:bg-white/[0.08]"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="pointer-events-auto mx-auto flex w-full items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 px-2 py-2 backdrop-blur-lg lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <NavItemChip key={`mobile-${item.label}`} item={item} mobile />
          ))}
        </nav>
      </div>
    </header>
  );
}
