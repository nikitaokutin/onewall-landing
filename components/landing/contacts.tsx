import { ArrowUpRight, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionTitle, formatRub } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { site } from "@/lib/site";

const delivery = [
  { label: "Самовывоз из шоурума", value: "бесплатно" },
  { label: "Доставка по Владивостоку", value: formatRub(site.pricing.deliveryCity) },
  { label: "До транспортной компании", value: formatRub(site.pricing.deliveryToCarrier) },
  { label: "В другие города России", value: "любой ТК" },
];

export function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-16 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            title="Шоурум и доставка"
            text="Приезжайте посмотреть панели вживую во Владивостоке или закажите отправку в свой город."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-2xl bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight">Шоурум</h3>
            </div>
            <p className="mt-6 text-lg leading-snug">{site.showroom.address}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{site.showroom.note}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={site.showroom.mapsHref} target="_blank" rel="noopener">
                  Открыть на карте
                  <ArrowUpRight aria-hidden />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href={site.seller.phoneHref}>
                  <Phone aria-hidden />
                  {site.seller.phone}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Truck className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight">Доставка и оплата</h3>
            </div>
            <dl className="mt-6 grid gap-3">
              {delivery.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted-foreground sm:text-base">{d.label}</dt>
                  <dd className="shrink-0 font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Оплата наличными или по безналичному расчёту. Дизайнерам, флипперам, бригадам и оптовикам:
              отдельные условия, напишите.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={32} className="mt-4 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Напишите Артёму, он всё посчитает
              </h2>
              <p className="mt-4 max-w-[36rem] text-base leading-relaxed opacity-85 sm:text-lg">
                Подскажет серию, посчитает панели и запишет на замер. Можно просто прислать фото комнаты.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground shadow-none hover:bg-background/90"
              >
                <a href={site.seller.whatsapp} target="_blank" rel="noopener">
                  <MessageCircle aria-hidden />
                  Написать Артёму
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
