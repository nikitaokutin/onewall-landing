import { Container, Logo } from "@/components/landing/primitives";
import { site } from "@/lib/site";

const links = [
  { label: "Instagram", href: site.seller.instagram },
  { label: "Farpost", href: site.seller.farpost },
  { label: "WhatsApp", href: site.seller.whatsapp },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <p className="font-heading text-sm font-semibold tracking-tight">{site.name}</p>
            <p className="text-xs text-muted-foreground">{site.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground" aria-label="Соцсети">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener" className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          {site.city}, {site.showroom.address.split(",")[0]}
        </p>
      </Container>
    </footer>
  );
}
