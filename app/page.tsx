import { BeforeAfter } from "@/components/landing/before-after";
import { Benefits } from "@/components/landing/benefits";
import { Contacts } from "@/components/landing/contacts";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Highlights } from "@/components/landing/highlights";
import { Price } from "@/components/landing/price";
import { Process } from "@/components/landing/process";
import { Proof } from "@/components/landing/proof";
import { SeriesGrid } from "@/components/landing/series";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Benefits />
        <SeriesGrid />
        <BeforeAfter />
        <Price />
        <Process />
        <Proof />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
