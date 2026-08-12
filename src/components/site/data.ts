import svcTreatment from "@/assets/svc-treatment.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcWhitening from "@/assets/svc-whitening.jpg";
import svcAesthetic from "@/assets/svc-aesthetic.jpg";
import smile from "@/assets/smile.jpg";
import chair from "@/assets/chair.jpg";
import equipment from "@/assets/equipment.jpg";
import interior from "@/assets/interior.jpg";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

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
  experienceYears: 10,
  happyPatients: "3 500+",
};

export const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Врачи", href: "#doctors" },
  { label: "Результаты", href: "#before-after" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const SERVICE_CATEGORIES = ["Все", "Терапия", "Эстетика", "Ортопедия", "Хирургия"];

export const SERVICES = [
  {
    title: "Лечение зубов и кариеса",
    category: "Терапия",
    text: "Безболезненное лечение кариеса и пульпита с использованием премиальных световых пломб.",
    price: "от 12 000 ₸",
    duration: "45 мин",
    img: svcTreatment,
    popular: true,
  },
  {
    title: "Профессиональная чистка AirFlow",
    category: "Терапия",
    text: "Ультразвуковое удаление зубного камня, полировка и фторирование эмали.",
    price: "от 18 000 ₸",
    duration: "60 мин",
    img: svcCleaning,
    popular: true,
  },
  {
    title: "Безопасное отбеливание",
    category: "Эстетика",
    text: "Осветление эмали до 8 тонов за 1 визит без чувствительности зубов.",
    price: "от 45 000 ₸",
    duration: "60 мин",
    img: svcWhitening,
    popular: true,
  },
  {
    title: "Керамические виниры",
    category: "Эстетика",
    text: "Ультратонкие фарфоровые накладки для идеальной формы и белоснежного цвета.",
    price: "от 95 000 ₸",
    duration: "2 визита",
    img: svcAesthetic,
    popular: true,
  },
  {
    title: "Протезирование и коронки",
    category: "Ортопедия",
    text: "Коронки из диоксида циркония и металлокерамики для безупречной естественности.",
    price: "от 55 000 ₸",
    duration: "от 3 дней",
    img: smile,
    popular: false,
  },
  {
    title: "Имплантация под ключ",
    category: "Хирургия",
    text: "Восстановление утраченных зубов с гарантией от мировых производителей.",
    price: "от 140 000 ₸",
    duration: "40 мин",
    img: chair,
    popular: true,
  },
  {
    title: "Атравматичное удаление",
    category: "Хирургия",
    text: "Бережное удаление зубов любой сложности, включая сложные зубы мудрости.",
    price: "от 15 000 ₸",
    duration: "30 мин",
    img: equipment,
    popular: false,
  },
  {
    title: "Цифровая 3D-диагностика",
    category: "Терапия",
    text: "Детальный осмотр и составление пошагового плана лечения.",
    price: "Бесплатно*",
    duration: "20 мин",
    img: interior,
    popular: false,
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Д-р Алия Доспанова",
    role: "Главный врач · Стоматолог-терапевт",
    experience: "12 лет опыта",
    specs: ["Эстетическая реставрация", "Эндодонтия", "Отбеливание"],
    education: "КазНМУ им. С.Д. Асфендиярова",
    img: doctorPlaceholder,
  },
  {
    id: 2,
    name: "Д-р Арман Нурланов",
    role: "Стоматолог-ортопед · Хирург",
    experience: "10 лет опыта",
    specs: ["Имплантация", "Циркониевые коронки", "Виниры"],
    education: "Карагандинский медицинский университет",
    img: doctorPlaceholder,
  },
  {
    id: 3,
    name: "Д-р Дана Смагулова",
    role: "Детский стоматолог · Пародонтолог",
    experience: "8 лет опыта",
    specs: ["Лечение без боли", "Гигиена AirFlow", "Профилактика"],
    education: "ММУ Астана",
    img: doctorPlaceholder,
  },
];

export const REVIEWS = [
  {
    name: "Айгерим Касымова",
    date: "14 июля 2026",
    procedure: "Отбеливание & Чистка AirFlow",
    rating: 5,
    text: "Очень понравилась атмосфера в Dream Smile! Все стильно, чисто и очень вежливо. Процедура отбеливания прошла абсолютно без боли, а результат — просто фантастика!",
    verified: true,
  },
  {
    name: "Бауржан Ахметов",
    date: "28 июня 2026",
    procedure: "Лечение кариеса и установка коронки",
    rating: 5,
    text: "Обратился по рекомендации знакомых. Врачи — настоящие профессионалы. Подробно объяснили все этапы и стоимость до начала лечения. Никаких скрытых платежей.",
    verified: true,
  },
  {
    name: "Динара Оспанова",
    date: "2 мая 2026",
    procedure: "Установка виниров",
    rating: 5,
    text: "Мечтала об идеальной улыбке несколько лет. Спасибо клинике Dream Smile за мою уверенность! Очень чуткие врачи и суперсовременное оборудование.",
    verified: true,
  },
];
