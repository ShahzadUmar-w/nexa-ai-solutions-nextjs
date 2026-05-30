import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { ROUTES } from "@/lib/site";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      className={`group flex items-center gap-3 ${className}`}
    >
      <Image
        src={BRAND.logo}
        alt="Nexa AI Solutions"
        width={44}
        height={44}
        className="h-10 w-10 object-contain transition-transform group-hover:scale-105 sm:h-11 sm:w-11"
        priority
      />
      <div className="hidden leading-none sm:block">
        <p className="text-[15px] font-bold tracking-tight text-foreground">
          NEXA <span className="text-gradient-brand">AI</span>
        </p>
        <p className="mt-1 text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
          Solutions
        </p>
      </div>
    </Link>
  );
}
