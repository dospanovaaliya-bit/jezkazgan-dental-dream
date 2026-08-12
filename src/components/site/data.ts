import svcTreatment from "@/assets/svc-treatment.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcWhitening from "@/assets/svc-whitening.jpg";
import svcAesthetic from "@/assets/svc-aesthetic.jpg";
import smile from "@/assets/smile.jpg";
import chair from "@/assets/chair.jpg";
import equipment from "@/assets/equipment.jpg";
import interior from "@/assets/interior.jpg";

export const CLINIC = {
  name: "Dream Smile",
  city: "Жезказган",
  address: "Проспект Алашахана, 66, Жезказган",
  phoneMain: "+7 707 032 03 20",
  phoneMainHref: "tel:+77070320320",
  phones: ["+7 707 032 03 20", "+7 (7102) 74-43-65", "+7 (7102) 74-43-66"],
  phoneHrefs: ["tel:+77070320320", "tel:+77102744365", "tel:+77102744366"],
  whatsapp: "https://wa.me/77070320320",
  instagram: "https://instagram.com/",
  hours: "Ежедневно 09:00 — 19:00",
  rating: "5.0",
  reviewsCount: 42,
};

export const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Врачи", href: "#doctors" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const SERVICES = [
  {
    title: "Лечение зубов",
    text: "Бережное лечение кариеса и восстановление формы зуба.",
    img: svcTreatment,
  },
  {
    title: "Профессиональная чистка",
    text: "Удаление налета и камня для здоровья десен.",
    img: svcCleaning,
  },
  {
    title: "Отбеливание",
    text: "Безопасное осветление эмали на несколько тонов.",
    img: svcWhitening,
  },
  {
    title: "Эстетическая стоматология",
    text: "Реставрации и виниры для естественной красоты улыбки.",
    img: svcAesthetic,
  },
  { title: "Протезирование", text: "Коронки и протезы, которые выглядят естественно.", img: smile },
  { title: "Имплантация", text: "Восстановление зубов с надежной опорой на имплант.", img: chair },
  { title: "Удаление зубов", text: "Комфортное удаление с современной анестезией.", img: equipment },
  { title: "Диагностика", text: "Точный осмотр и снимки перед началом лечения.", img: interior },
];
