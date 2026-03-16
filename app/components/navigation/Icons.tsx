import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 7.5 10 12.5 15 7.5" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m22 2-9 20-3.5-8.5L1 10 22 2Z" />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 14c1.6 0 1.6-4 3.2-4s1.6 8 3.2 8 1.6-12 3.2-12 1.6 12 3.2 12 1.6-8 3.2-8 1.6 4 3.2 4" />
    </svg>
  );
}
