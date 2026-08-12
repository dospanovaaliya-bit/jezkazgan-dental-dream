import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Doctors } from "@/components/site/Doctors";
import { Reviews } from "@/components/site/Reviews";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Process } from "@/components/site/Process";
import { Booking } from "@/components/site/Booking";
import { Contacts, Footer } from "@/components/site/Contacts";
import { MobileBar } from "@/components/site/MobileBar";

const title = "Али дент — стоматология в Жезказгане";
const description =
  "Стоматология «Али дент» в Жезказгане: 2 филиала, круглосуточно по предварительной записи. 5.0 рейтинг в 2ГИС. Запись: +7 (771) 156-35-29.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Али дент",
          address: {
            "@type": "PostalAddress",
            streetAddress: "городская администрация, 1 этаж",
            addressLocality: "Жезказган",
            addressCountry: "KZ",
          },
          telephone: "+77711563529",
          openingHours: "Mo-Su 00:00-24:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "163" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <Doctors />
        <Reviews />
        <BeforeAfter />
        <Process />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
