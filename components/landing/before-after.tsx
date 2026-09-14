import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { Container, SectionTitle } from "@/components/landing/primitives";
import { Reveal } from "@/components/landing/reveal";
import { photos } from "@/lib/site";

/**
 * Сравнение «до / после». Сейчас стоят стоковые фото двух разных комнат:
 * замените photos.before и photos.after на снимки одного объекта до и после монтажа.
 */
export function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-16 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            align="center"
            title="Так будет выглядеть ваша квартира"
            text="Потяните ползунок. Слева: стены до ремонта. Справа: гостиная с бамбуковыми панелями."
          />
        </Reveal>

        <Reveal delay={0.1} y={32} className="mx-auto mt-12 max-w-5xl">
          <ImageComparison
            beforeImage={photos.before}
            afterImage={photos.after}
            altBefore="Комната до ремонта: голые стены"
            altAfter="Комната после: стена с бамбуковыми панелями"
            initialPosition={42}
          />
        </Reveal>
      </Container>
    </section>
  );
}
