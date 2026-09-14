import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Logo } from "@/components/landing/primitives";
import { photos, site } from "@/lib/site";

/**
 * Хиро повторяет шапку профиля Instagram: круглый логотип, ник, «био»
 * и главная кнопка. Справа: одно большое фото вместо ленты.
 * Появление сделано на CSS (tw-animate-css), чтобы не зависеть от гидрации.
 */
const enter =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-12">
        <div className="lg:col-span-7">
          <div className={`flex items-center gap-4 ${enter}`}>
            <span className="ring-story rounded-full p-[3px]">
              <span className="block rounded-full bg-background p-[3px]">
                <Logo size={72} className="size-16 sm:size-[72px]" />
              </span>
            </span>
            <div>
              <p className="font-heading text-lg font-semibold tracking-tight">{site.handle}</p>
              <p className="text-sm text-muted-foreground">
                {site.stats.followers} подписчиков · {site.city}
              </p>
            </div>
          </div>

          <h1
            className={`mt-6 font-heading text-4xl leading-[1.02] font-bold tracking-tight text-balance sm:text-5xl xl:text-[3.375rem] ${enter} motion-safe:delay-100`}
          >
            Ремонт выгодно, но премиально
          </h1>

          <p
            className={`mt-6 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:text-lg ${enter} motion-safe:delay-200`}
          >
            Бамбуковые стеновые панели как в Pinterest: влагостойкие, экологичные, монтаж за один день.
            Замер и дизайн-проект в подарок.
          </p>

          <div className={`mt-8 flex flex-wrap gap-3 ${enter} motion-safe:delay-300`}>
            <Button asChild size="lg">
              <a href={site.seller.whatsapp} target="_blank" rel="noopener">
                <MessageCircle aria-hidden />
                Написать Артёму
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#series">
                Смотреть серии
                <ArrowDown aria-hidden />
              </a>
            </Button>
          </div>
        </div>

        <div className={`lg:col-span-5 ${enter} motion-safe:delay-150`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface sm:aspect-[5/4] lg:aspect-auto lg:h-[calc(100dvh-10rem)] lg:max-h-[640px] lg:min-h-[460px]">
            <Image
              src={photos.hero}
              alt={photos.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
