import * as React from "react";
import Image from "next/image";
import { cn } from "cn";
import { site } from "@/lib/site";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

/** Круглый логотип из Instagram. Используется в шапке, хиро и футере. */
export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/brand/logo.jpg"
      alt={`Логотип ${site.name}`}
      width={size}
      height={size}
      priority={size > 60}
      className={cn("rounded-full bg-white object-cover", className)}
    />
  );
}

export function SectionTitle({
  title,
  text,
  className,
  align = "left",
}: {
  title: string;
  text?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-[42rem]", align === "center" && "mx-auto text-center", className)}>
      <h2 className="font-heading text-3xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>}
    </div>
  );
}

export const formatRub = (n: number) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";
