import Image from "next/image";
import { Container, SectionTitle } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { photos, site } from "@/lib/site";

const { width, height, thickness } = site.pricing.panel;

/**
 * Бенто на 5 ячеек: 2 фото, 1 акцентная, 2 текстовые.
 * Ряд 1: 4 + 2 колонки, ряд 2: 2 + 2 + 2.
 */
export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            title="Почему бамбуковые панели"
            text="Материал, который выглядит как дорогая отделка, а монтируется быстрее обоев."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <Reveal className="relative min-h-[320px] overflow-hidden rounded-2xl bg-surface md:col-span-4">
            <Image
              src={photos.living}
              alt="Гостиная с панелями от пола до потолка без стыков"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold tracking-tight">Стена без швов</h3>
              <p className="mt-2 max-w-[28rem] text-sm leading-relaxed text-foreground/85 sm:text-base">
                Панель {width}×{height} мм закрывает стену от пола до потолка одним листом.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col justify-between rounded-2xl bg-surface p-6 sm:p-8 md:col-span-2">
            <p className="font-heading text-5xl font-bold tracking-tight text-primary">{thickness} мм</p>
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight">Поверх старой отделки</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Клеятся на подготовленную стену без демонтажа и штробления. Пыли и мешков с мусором нет.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="rounded-2xl bg-surface p-6 sm:p-8 md:col-span-2">
            <h3 className="font-heading text-xl font-semibold tracking-tight">Влагостойкие</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Кухня, прихожая и ванная: панель не боится воды и легко моется.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="relative min-h-[220px] overflow-hidden rounded-2xl bg-surface md:col-span-2">
            <Image
              src={photos.wood}
              alt="Тёплая древесная фактура панелей"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-heading text-xl font-semibold tracking-tight">Экологичный бамбук</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                Натуральное волокно, тёплое на ощупь и без запаха.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8 md:col-span-2">
            <h3 className="font-heading text-xl font-semibold tracking-tight">Монтаж за день</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              Наши монтажники ставят комнату за один рабочий день по самой низкой цене в городе.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
