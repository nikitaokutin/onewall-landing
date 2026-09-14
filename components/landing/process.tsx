import Image from "next/image";
import { Container, SectionTitle } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { photos } from "@/lib/site";

const steps = [
  {
    title: "Замер",
    text: "Дизайнер приезжает в удобное время, измеряет стены и смотрит, как ляжет свет.",
  },
  {
    title: "Дизайн-проект",
    text: "Раскладка панелей, подбор серии и точный расчёт количества. Бесплатно.",
  },
  {
    title: "Доставка",
    text: "По Владивостоку привозим сами, в другие города отправляем транспортной компанией.",
  },
  {
    title: "Монтаж",
    text: "Наша бригада ставит панели за один день и убирает за собой.",
  },
];

/** Вертикальный список шагов с хайрлайнами рядом с одним большим фото. */
export function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-surface/50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            title="Как проходит работа"
            text="Четыре шага от первого сообщения до готовой стены. Вы участвуете только в первом."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal y={32} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface lg:col-span-5 lg:aspect-auto">
            <Image
              src={photos.montage}
              alt="Монтажник раскраивает панель"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <ol className="lg:col-span-7">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-border py-7 first:border-t-0 first:pt-0 last:pb-0">
                <Reveal delay={i * 0.06} className="grid gap-3 sm:grid-cols-12 sm:gap-6">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight sm:col-span-5">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:col-span-7">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
