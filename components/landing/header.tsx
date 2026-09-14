import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Logo } from "@/components/landing/primitives";
import { site } from "@/lib/site";

const nav = [
  { href: "#series", label: "Серии" },
  { href: "#price", label: "Цена" },
  { href: "#before-after", label: "До и после" },
  { href: "#process", label: "Как работаем" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-3" aria-label="На главную">
          <Logo size={36} />
          <span className="font-heading text-sm font-semibold tracking-tight">{site.handle}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex" aria-label="Разделы">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href={site.seller.whatsapp} target="_blank" rel="noopener">
            <MessageCircle aria-hidden />
            Написать Артёму
          </a>
        </Button>
        <Button asChild size="icon-sm" className="sm:hidden" aria-label="Написать Артёму">
          <a href={site.seller.whatsapp} target="_blank" rel="noopener">
            <MessageCircle aria-hidden />
          </a>
        </Button>
      </Container>
    </header>
  );
}
