import { Check } from "lucide-react";
import { Calculator } from "@/components/landing/calculator";
import { Container, SectionTitle, formatRub } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { site } from "@/lib/site";

const included = [
  "Выезд дизайнера на замер",
  "Дизайн-проект с раскладкой панелей",
  "Помощь в подборе серии и оттенка",
  "Монтажники по самой низкой цене в городе",
];

const { width, height, thickness } = site.pricing.panel;

export function Price() {
  return (
    <section id="price" className="scroll-mt-16 bg-surface/50 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionTitle
              title="Цена без сюрпризов"
              text="Одна цена за м² на все серии, кроме Металлика. Услуги вокруг панелей уже включены."
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight text-primary">
                {formatRub(site.pricing.perSqm)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">за квадратный метр</p>
            </div>
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight">{formatRub(site.pricing.perPanel)}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                за панель {width}×{height}×{thickness} мм
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <p className="font-heading text-lg font-semibold tracking-tight">В подарок к панелям</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Серия Металлик: {formatRub(site.pricing.perPanelMetallic)} за панель.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={32} className="lg:col-span-6">
          <Calculator />
        </Reveal>
      </Container>
    </section>
  );
}
