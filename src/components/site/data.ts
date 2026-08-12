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
  name: "Али дент",
  city: "Жезказган",
  address: "Жезказган, городская администрация, 1 этаж",
  branches: "2 филиала",
  phoneMain: "+7 (771) 156-35-29",
  phoneMainHref: "tel:+77711563529",
  phones: ["+7 (771) 156-35-29", "+7 (708) 123-45-67"],
  phoneHrefs: ["tel:+77711563529", "tel:+77081234567"],
  whatsapp: "https://wa.me/77711563529",
  instagram: "https://instagram.com/",
  hours: "Круглосуточно",
  hoursSub: "по предварительной записи",
  rating: "5.0",
  verified: true,
  reviewsCount: 163,
  reviewsTextCount: 86,
  happyPatients: "Более 3 500",
};

export const NAV = [
  { label: "Главная", href: "#top" },
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Отзывы", href: "#reviews" },
  { label: "О клинике", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export const TRUST_ITEMS = [
  {
    iconName: "box",
    title: "Цифровая 3D-диагностика",
    text: "Точная диагностика и планирование лечения с помощью 3D-сканирования нового поколения.",
  },
  {
    iconName: "syringe",
    title: "Анестезия без боли",
    text: "Компьютерная анестезия STA System делает процедуру максимально комфортной.",
  },
  {
    iconName: "shield",
    title: "Гарантия стерильности",
    text: "Многоуровневая система стерилизации и строгое соблюдение медицинских стандартов.",
  },
  {
    iconName: "file-text",
    title: "Прозрачные цены",
    text: "Честные цены и прозрачный план лечения без скрытых доплат и неожиданных расходов.",
  },
];

export const SERVICES = [
  {
    title: "Профессиональная гигиена",
    category: "Терапия",
    text: "Ультразвуковая чистка, AirFlow и фторирование эмали.",
    duration: "60 мин",
    price: "15 000 ₸",
    img: svcCleaning,
    hit: false,
  },
  {
    title: "Виниры E-max",
    category: "Эстетика",
    text: "Керамические виниры безупречной формы и естественного цвета.",
    duration: "от 60 мин",
    price: "180 000 ₸",
    img: svcAesthetic,
    hit: true,
  },
  {
    title: "Лечение кариеса",
    category: "Терапия",
    text: "Безболезненное лечение кариеса с премиальной световой пломбой.",
    duration: "45 мин",
    price: "12 000 ₸",
    img: svcTreatment,
    hit: false,
  },
  {
    title: "Имплантация зубов",
    category: "Хирургия",
    text: "Восстановление утраченного зуба с гарантией качества.",
    duration: "40 мин",
    price: "140 000 ₸",
    img: chair,
    hit: true,
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Д-р Алия Доспанова",
    role: "Главный врач · Стоматолог-терапевт",
    experience: "12 лет опыта",
    specs: ["Эстетическая реставрация", "Эндодонтия", "Отбеливание"],
    img: doctorPlaceholder,
  },
  {
    id: 2,
    name: "Д-р Арман Нурланов",
    role: "Стоматолог-ортопед · Хирург",
    experience: "10 лет опыта",
    specs: ["Имплантация", "Коронки", "Виниры"],
    img: doctorPlaceholder,
  },
  {
    id: 3,
    name: "Д-р Дана Смагулова",
    role: "Детский стоматолог · Пародонтолог",
    experience: "8 лет опыта",
    specs: ["Лечение без боли", "Гигиена", "Профилактика"],
    img: doctorPlaceholder,
  },
];

export const REVIEWS = [
  {
    name: "Айгерим Касымова",
    date: "14 июля 2026",
    procedure: "Отбеливание & Чистка AirFlow",
    rating: 5,
    text: "Очень понравилась атмосфера в клинике Али дент! Все стильно, чисто и очень вежливо. Процедура прошла абсолютно без боли, а результат — супер!",
    verified: true,
  },
  {
    name: "Бауржан Ахметов",
    date: "28 июня 2026",
    procedure: "Лечение кариеса и установка коронки",
    rating: 5,
    text: "Обратился в Али дент по рекомендации. Врачи — настоящие профессионалы. Подробно объяснили все этапы и стоимость до начала лечения.",
    verified: true,
  },
  {
    name: "Динара Оспанова",
    date: "2 мая 2026",
    procedure: "Установка виниров",
    rating: 5,
    text: "Мечтала об идеальной улыбке несколько лет. Спасибо клинике Али дент за мою уверенность! Очень чуткие врачи.",
    verified: true,
  },
];
