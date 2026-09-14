import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Задайте NEXT_PUBLIC_SITE_URL на хостинге, чтобы OG-картинки резолвились в абсолютные ссылки.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name}: бамбуковые стеновые панели во Владивостоке и по России`,
  description:
    "Бамбуковые стеновые панели 2800×1200×8 мм от 2 000 ₽ за м². Замер и дизайн-проект в подарок, монтаж, доставка по всей России. Шоурум во Владивостоке.",
  openGraph: {
    title: `${site.name}: бамбуковые стеновые панели`,
    description: "Ремонт выгодно, но премиально. Замер и дизайн-проект в подарок.",
    images: ["/brand/logo.jpg"],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
