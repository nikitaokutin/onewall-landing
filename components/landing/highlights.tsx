import Image from "next/image";
import { Container } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { photos, series, site } from "@/lib/site";

/** Ряд «актуального» как в Instagram: кружки ведут к разделам страницы. */
const items = [
  { label: "Серии", href: "#series", image: series[0].image },
  { label: "Цена", href: "#price", image: photos.wood },
  { label: "До и после", href: "#before-after", image: photos.after },
  { label: "Монтаж", href: "#process", image: photos.montage },
  { label: "Отзывы", href: site.seller.instagram, image: photos.bedroom, external: true },
  { label: "Доставка", href: "#contacts", image: photos.hallway },
];

export function Highlights() {
  return (
    <section aria-label="Разделы" className="border-y border-border">
      <Container className="py-6">
        <Reveal>
          <ul className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:justify-between sm:px-0 [scrollbar-width:none]">
            {items.map((item) => (
              <li key={item.label} className="shrink-0 snap-start">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener" : undefined}
                  className="group flex w-20 flex-col items-center gap-2 text-center sm:w-24"
                >
                  <span className="rounded-full border border-foreground/25 p-[3px] transition-colors group-hover:border-primary">
                    <span className="relative block size-16 overflow-hidden rounded-full bg-surface sm:size-[72px]">
                      <Image src={item.image} alt="" fill sizes="80px" className="object-cover" />
                    </span>
                  </span>
                  <span className="text-xs font-medium text-foreground/90">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
