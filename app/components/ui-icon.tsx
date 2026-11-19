import type { CSSProperties } from "react";

const paths = {
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8Z" />
      <path d="m2 12 10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
  audio: (
    <>
      <path d="m11 4-6 5H2v6h3l6 5Z" />
      <path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
    </>
  ),
  quiz: (
    <>
      <rect x="5" y="4" width="15" height="18" rx="3" />
      <path d="M9 2h7v4H9zM9 12l2 2 4-4M9 18h7" />
    </>
  ),
  progress: (
    <>
      <path d="M4 19V5m0 14h16M8 15l4-5 4 2 5-7" />
      <path d="M17 5h4v4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  offline: (
    <>
      <path d="M3 9a15 15 0 0 1 18 0M6 12a10 10 0 0 1 12 0m-9 3a5 5 0 0 1 6 0" />
      <path d="M12 19h.01M3 3l18 18" />
    </>
  ),
  book: (
    <path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15" />
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4Z" />
    </>
  ),
  flip: <path d="M3 10a9 9 0 1 1 1 7M3 4v6h6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" />
    </>
  ),
  moon: <path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="m16 16 5 5" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;
export function Icon({
  name,
  className,
  style,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
