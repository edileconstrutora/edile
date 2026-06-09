import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

type Variant = "solid" | "outline" | "ghost" | "light";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  // ação primária — petróleo da marca
  solid:
    "bg-petrol-900 text-paper hover:bg-petrol-800 border border-transparent",
  // contorno discreto sobre fundo claro
  outline:
    "bg-transparent text-ink border border-line hover:border-petrol-900 hover:text-petrol-900",
  // mínimo, só texto
  ghost:
    "bg-transparent text-petrol-700 border border-transparent hover:text-petrol-900",
  // sobre fundos escuros (hero/CTA)
  light:
    "bg-paper text-petrol-900 hover:bg-white border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.8125rem]",
  md: "h-12 px-7 text-[0.8125rem]",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Mostra a seta à direita (com micro-movimento no hover). */
  withArrow?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };
type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href"
  >;

const baseClass =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium uppercase tracking-[0.08em] " +
  "transition-colors duration-300 ease-[var(--ease-out-soft)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper " +
  "disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "solid",
    size = "md",
    withArrow = false,
    className,
    ...rest
  } = props;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover/btn:translate-x-1" />
      )}
    </>
  );

  const classes = cn(baseClass, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
