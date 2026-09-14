import { ArrowUpRight, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Logo } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { site } from "@/lib/site";

const stats = [
  { value: site.stats.followers, label: "подписчиков в Instagram" },
  { value: "4 альбома", label: "с готовыми объектами" },
  { value: site.stats.yearsOnFarpost, label: "продаём на Farpost" },
];

/**
 * Социальное доказательство без выдуманных отзывов: реальные цифры
 * и ссылка на «Отзывы» и «Объекты» в актуальном Instagram.
 */
export function Proof() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="grid gap-10 rounded-2xl bg-surface p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <Logo size={56} />
              <div>
                <p className="font-heading font-semibold tracking-tight">{site.handle}</p>
                <p className="text-sm text-muted-foreground">Отзывы и объекты в актуальном</p>
              </div>
            </div>
            <h2 className="mt-8 font-heading text-3xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-4xl">
              Смотрите, как панели стоят у наших клиентов
            </h2>
            <p className="mt-4 max-w-[36rem] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Все отзывы и фото готовых объектов собраны в Instagram: без отбора, как есть.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <a href={site.seller.instagram} target="_blank" rel="noopener">
                <AtSign aria-hidden />
                Открыть Instagram
                <ArrowUpRight aria-hidden />
              </a>
            </Button>
          </div>

          <dl className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-heading text-3xl font-bold tracking-tight text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
