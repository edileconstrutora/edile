import type { SVGProps } from "react";

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3.5 5.5 8 10 12.5" />
    </svg>
  );
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  );
}

export function Home(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26 27"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.83479 16.6442C8.42685 18.9445 10.515 20.6442 13.0001 20.6442C15.4852 20.6442 17.5734 18.9445 18.1654 16.6442M11.6904 1.66287L2.64729 8.69637C2.0428 9.16653 1.74055 9.40161 1.5228 9.69601C1.32992 9.9568 1.18624 10.2506 1.0988 10.5629C1.0001 10.9156 1.0001 11.2985 1.0001 12.0643V21.7109C1.0001 23.2043 1.0001 23.9511 1.29075 24.5215C1.54641 25.0233 1.95436 25.4312 2.45613 25.6869C3.02656 25.9775 3.77329 25.9775 5.26677 25.9775H20.7334C22.2269 25.9775 22.9736 25.9775 23.5441 25.6869C24.0458 25.4312 24.4538 25.0233 24.7095 24.5215C25.0001 23.9511 25.0001 23.2043 25.0001 21.7109V12.0643C25.0001 11.2985 25.0001 10.9156 24.9014 10.5629C24.814 10.2506 24.6703 9.9568 24.4774 9.69601C24.2597 9.40161 23.9574 9.16653 23.3529 8.69637L14.3098 1.66287C13.8414 1.29853 13.6072 1.11637 13.3486 1.04634C13.1204 0.984553 12.8798 0.984553 12.6516 1.04634C12.393 1.11637 12.1588 1.29853 11.6904 1.66287Z" />
    </svg>
  );
}

export function Building(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28.6667 26"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13 11.6667H6.6C5.10653 11.6667 4.35979 11.6667 3.78936 11.9573C3.28759 12.213 2.87964 12.6209 2.62398 13.1227C2.33333 13.6931 2.33333 14.4399 2.33333 15.9333V25M26.3333 25V5.26667C26.3333 3.77319 26.3333 3.02646 26.0427 2.45603C25.787 1.95426 25.3791 1.54631 24.8773 1.29065C24.3069 1 23.5601 1 22.0667 1H17.2667C15.7732 1 15.0265 1 14.456 1.29065C13.9543 1.54631 13.5463 1.95426 13.2906 2.45603C13 3.02646 13 3.77319 13 5.26667V25M27.6667 25H1M17.6667 6.33333H21.6667M17.6667 11.6667H21.6667M17.6667 17H21.6667" />
    </svg>
  );
}

export function Plots(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="1" y="1" width="24" height="24" rx="2" />
      <path d="M10 1v24M1 15.5h24M10 15.5 18 8" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6 8 10.5 12.5 6" />
    </svg>
  );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="11" height="11" rx="3.2" />
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="11.2" cy="4.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="11" height="11" rx="2" />
      <path d="M5 6.7V11M5 4.9v.01M7.6 11V8.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6V11" />
    </svg>
  );
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 4.2H8.9c-.7 0-1.2.5-1.2 1.2V7H10l-.4 2.2H7.7V14" />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 5h11M2.5 11h11" />
    </svg>
  );
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

// Ícones dos pilares (seção Propósito) — viewBox 24, traço fino.
const glyph = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Frame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3" />
      <rect x="9.25" y="9.25" width="5.5" height="5.5" rx="1" />
    </svg>
  );
}

export function Aperture(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M7.25 16.75 16.75 7.25" />
    </svg>
  );
}

export function Columns(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M10 4v16" />
    </svg>
  );
}

export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M12 3.25 19 5.75v5.5c0 4.4-3 6.9-7 8.25-4-1.35-7-3.85-7-8.25v-5.5L12 3.25Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}

export function CheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M12 3.25 19 5.75v5.5c0 4.4-3 6.9-7 8.25-4-1.35-7-3.85-7-8.25v-5.5L12 3.25Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function PhoneCall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Zap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function Trees(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M10 10v.5A3.5 3.5 0 0 1 6.5 14H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h6" />
      <path d="M14 6.5A3.5 3.5 0 0 1 17.5 10H18a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1h-6" />
      <path d="M12 2v20" />
    </svg>
  );
}

export function Compass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...glyph} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

