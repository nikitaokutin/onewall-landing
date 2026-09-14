import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionTitle, formatRub } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { series, site } from "@/lib/site";

const [featured, ...rest] = series;
const { width, height, thickness } = site.pricing.panel;

/**
 * Каталог: одна серия крупно (самая популярная), остальные шесть
 * в сетке 3×2 как лента Instagram. 7 позиций, 7 ячеек.
 */
export function SeriesGrid() {
  return (
    <section id="series" className="scroll-mt-16 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            title="Семь серий под любой интерьер"
            text={`Все панели одного размера: ${width}×${height}×${thickness} мм. Цвет и фактуру подбираем на замере.`}
          />
        </Reveal>

        <Reveal className="mt-12 grid overflow-hidden rounded-2xl bg-surface lg:grid-cols-12">
          <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={featured.image}
              alt={`Серия ${featured.name}`}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              <p className="text-sm font-medium text-primary">Самая популярная серия</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {featured.short}. Тёплый оттенок сочетается с серым текстилем, чёрным металлом и светлым полом.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-heading text-2xl font-semibold">
                {formatRub(featured.price)}
                <span className="ml-2 text-sm font-normal text-muted-foreground">за панель</span>
              </p>
              <Button asChild variant="outline">
                <a href={featured.farpost} target="_blank" rel="noopener">
                  На Farpost
                  <ArrowUpRight aria-hidden />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          {rest.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 0.05} y={20}>
                <a href={s.farpost} target="_blank" rel="noopener" className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src={s.image}
                      alt={`Серия ${s.name}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-base font-semibold tracking-tight sm:text-lg">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{formatRub(s.price)}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{s.short}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
