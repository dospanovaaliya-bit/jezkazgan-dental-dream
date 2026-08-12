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

const title = "Dream Smile — современная стоматология в Жезказгане";
const description =
  "Премиальная стоматология Dream Smile в Жезказгане: лечение, чистка, отбеливание, имплантация. Ежедневно 09:00–19:00. Запись: +7 707 032 03 20.";

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
          name: "Dream Smile",
          image: "https://cdn.gpteng.co/blank-app-v1.svg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Проспект Алашахана, 66",
            addressLocality: "Жезказган",
            addressCountry: "KZ",
          },
          telephone: "+77070320320",
          openingHours: "Mo-Su 09:00-19:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "42" },
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
