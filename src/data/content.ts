export const salonInfo = {
  name: "Saadyan studio",
  tagline: "Мастерская красоты",
  city: "Петропавловск",
  rating: "5.0",
  ratingCount: "343 оценки",
  reviewsCount: "220+",
  subscribers: "12 000+",
  branches: "2",
  award: "2GIS Awards 2026",
  phone: "+7 705 254 35 27",
  phoneLink: "tel:+77052543527",
  whatsapp: "https://wa.me/77052543527",
  whatsappText: encodeURIComponent("Здравствуйте! Хочу записаться"),
  instagram: "https://instagram.com/saadyan_studio",
  instagramHandle: "@saadyan_studio",
  twoGis: "https://2gis.kz/petropavlovsk/firm/70000001094471392",
  twoGisReviews: "https://2gis.kz/petropavlovsk/firm/70000001094471392/tab/reviews",
  twoGisRoute: "https://2gis.kz/petropavlovsk/firm/70000001094471392",
  hours: "Ежедневно 09:00–19:00",
  hoursNote: "по предварительной записи",
  payment: "Наличные и оплата по QR",
  wifi: "Wi-Fi для клиентов",
};

export const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Образ невесты", href: "#bridal" },
  { label: "Работы", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const heroImage =
  "https://images.pexels.com/photos/3993331/pexels-photo-3993331.jpeg?auto=compress&cs=tinysrgb&w=1920";

// TODO: заменить на фото салона
export const stats = [
  { value: 5.0, suffix: "", label: "Рейтинг в 2ГИС", decimals: 1 },
  { value: 220, suffix: "+", label: "Отзывов", decimals: 0 },
  { value: 12000, suffix: "+", label: "Подписчиков", decimals: 0 },
  { value: 2, suffix: "", label: "Филиала", decimals: 0 },
];

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  // TODO: заменить на фото салона
  image: string;
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    id: "makeup",
    title: "Макияж и причёски",
    icon: "Sparkles",
    description: "Вечерние, свадебные, образ «под ключ»",
    image: "https://images.pexels.com/photos/7290109/pexels-photo-7290109.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Вечерний макияж", price: "от 8 000 ₸" },
      { name: "Свадебный макияж", price: "от 15 000 ₸" },
      { name: "Образ «под ключ»", price: "от 25 000 ₸" },
      { name: "Вечерняя причёска", price: "от 10 000 ₸" },
      { name: "Свадебная причёска", price: "от 18 000 ₸" },
    ],
  },
  {
    id: "hair",
    title: "Волосы",
    icon: "Scissors",
    description: "Стрижки, укладки, окрашивание, кератин",
    image: "https://images.pexels.com/photos/4981476/pexels-photo-4981476.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Женская стрижка", price: "от 6 000 ₸" },
      { name: "Укладка", price: "от 5 000 ₸" },
      { name: "Сложное окрашивание", price: "от 20 000 ₸" },
      { name: "Кератиновое выпрямление", price: "от 25 000 ₸" },
      { name: "Ботокс для волос", price: "от 20 000 ₸" },
      { name: "Полировка волос", price: "от 8 000 ₸" },
    ],
  },
  {
    id: "nails",
    title: "Ногти",
    icon: "Hand",
    description: "Маникюр, педикюр, наращивание",
    image: "https://images.pexels.com/photos/10123923/pexels-photo-10123923.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Аппаратный маникюр", price: "от 5 000 ₸" },
      { name: "Гель-лак", price: "от 7 000 ₸" },
      { name: "Наращивание гелем", price: "от 12 000 ₸" },
      { name: "Женский педикюр", price: "от 8 000 ₸" },
      { name: "Мужской педикюр", price: "от 9 000 ₸" },
      { name: "Мужской маникюр", price: "от 5 000 ₸" },
      { name: "Парафиновые ванночки", price: "от 3 000 ₸" },
    ],
  },
  {
    id: "lashes",
    title: "Ресницы",
    icon: "Eye",
    description: "Наращивание, ламинирование, окрашивание",
    image: "https://images.pexels.com/photos/30896215/pexels-photo-30896215.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Наращивание ресниц", price: "от 8 000 ₸" },
      { name: "Ламинирование ресниц", price: "от 6 000 ₸" },
      { name: "Окрашивание ресниц", price: "от 3 000 ₸" },
    ],
  },
  {
    id: "brows",
    title: "Брови",
    icon: "Brush",
    description: "Коррекция, ламинирование",
    image: "https://images.pexels.com/photos/38283818/pexels-photo-38283818.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Коррекция бровей", price: "от 3 000 ₸" },
      { name: "Ламинирование бровей", price: "от 6 000 ₸" },
    ],
  },
  {
    id: "permanent",
    title: "Перманентный макияж",
    icon: "PenTool",
    description: "Перманент и тату",
    image: "https://images.pexels.com/photos/5368633/pexels-photo-5368633.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Перманентный макияж губ", price: "от ___ ₸" },
      { name: "Перманентный макияж бровей", price: "от ___ ₸" },
      { name: "Перманентный макияж век", price: "от ___ ₸" },
    ],
  },
  {
    id: "massage",
    title: "Массаж",
    icon: "HeartHandshake",
    description: "Расслабляющий массаж",
    image: "https://images.pexels.com/photos/4599377/pexels-photo-4599377.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Расслабляющий массаж", price: "от ___ ₸" },
    ],
  },
  {
    id: "home",
    title: "Выезд мастера на дом",
    icon: "Home",
    description: "Мастер приедет к вам",
    image: "https://images.pexels.com/photos/7984906/pexels-photo-7984906.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Выезд макияж + причёска", price: "от 30 000 ₸" },
    ],
  },
  {
    id: "education",
    title: "Обучение мастеров",
    icon: "GraduationCap",
    description: "Курсы для будущих мастеров",
    image: "https://images.pexels.com/photos/8510233/pexels-photo-8510233.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [
      { name: "Курс макияжа", price: "от ___ ₸" },
      { name: "Курс маникюра", price: "от ___ ₸" },
    ],
  },
];

export const bridalImage =
  "https://images.pexels.com/photos/20181205/pexels-photo-20181205.jpeg?auto=compress&cs=tinysrgb&w=1200";
// TODO: заменить на фото салона

export interface GalleryItem {
  id: number;
  src: string;
  category: "makeup" | "hair" | "nails" | "lashes";
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.pexels.com/photos/7290109/pexels-photo-7290109.jpeg?auto=compress&cs=tinysrgb&w=600", category: "makeup", alt: "Макияж" },
  { id: 2, src: "https://images.pexels.com/photos/10239026/pexels-photo-10239026.jpeg?auto=compress&cs=tinysrgb&w=600", category: "hair", alt: "Причёска" },
  { id: 3, src: "https://images.pexels.com/photos/10123923/pexels-photo-10123923.jpeg?auto=compress&cs=tinysrgb&w=600", category: "nails", alt: "Маникюр" },
  { id: 4, src: "https://images.pexels.com/photos/30896215/pexels-photo-30896215.jpeg?auto=compress&cs=tinysrgb&w=600", category: "lashes", alt: "Ресницы" },
  { id: 5, src: "https://images.pexels.com/photos/5368633/pexels-photo-5368633.jpeg?auto=compress&cs=tinysrgb&w=600", category: "makeup", alt: "Макияж глаз" },
  { id: 6, src: "https://images.pexels.com/photos/39142946/pexels-photo-39142946.jpeg?auto=compress&cs=tinysrgb&w=600", category: "hair", alt: "Вечерняя причёска" },
  { id: 7, src: "https://images.pexels.com/photos/29877719/pexels-photo-29877719.jpeg?auto=compress&cs=tinysrgb&w=600", category: "nails", alt: "Маникюр" },
  { id: 8, src: "https://images.pexels.com/photos/654692/pexels-photo-654692.jpeg?auto=compress&cs=tinysrgb&w=600", category: "lashes", alt: "Ресницы" },
  { id: 9, src: "https://images.pexels.com/photos/7290644/pexels-photo-7290644.jpeg?auto=compress&cs=tinysrgb&w=600", category: "makeup", alt: "Макияж" },
  { id: 10, src: "https://images.pexels.com/photos/31065906/pexels-photo-31065906.jpeg?auto=compress&cs=tinysrgb&w=600", category: "hair", alt: "Причёска" },
  { id: 11, src: "https://images.pexels.com/photos/9329773/pexels-photo-9329773.jpeg?auto=compress&cs=tinysrgb&w=600", category: "nails", alt: "Дизайн ногтей" },
  { id: 12, src: "https://images.pexels.com/photos/38283818/pexels-photo-38283818.jpeg?auto=compress&cs=tinysrgb&w=600", category: "lashes", alt: "Естественный макияж" },
];

export const galleryFilters = [
  { id: "all", label: "Все" },
  { id: "makeup", label: "Макияж" },
  { id: "hair", label: "Причёски" },
  { id: "nails", label: "Ногти" },
  { id: "lashes", label: "Ресницы" },
];

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  tag: string;
}

export const reviews: Review[] = [
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Делала макияж у мастера Дианы и причёску у мастера Аиды — выполняют свою работу на все 100%. Столько комплиментов я ещё никогда не получала!",
    date: "2ГИС",
    tag: "Макияж и причёска",
  },
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Очень понравился макияж! Делала мастер Дания, учла все моменты и подстраивалась под мои желания. Осталась довольна.",
    date: "2ГИС",
    tag: "Макияж",
  },
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Очень хороший салон красоты. Спасибо мастеру по наращиванию ресниц — отлично делает. Наращивание держится уже больше месяца.",
    date: "2ГИС",
    tag: "Ресницы",
  },
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Хочу выразить огромную благодарность студии Saadyan — макияж и причёска были на высшем уровне и продержались весь вечер! Очень рада, что в столь важный день обратилась именно сюда.",
    date: "2ГИС",
    tag: "Свадебный образ",
  },
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Делала макияж, причёску, а в дальнейшем стрижку. Все мастера супер милые и доброжелательные. Осталась очень довольна!",
    date: "2ГИС",
    tag: "Макияж и стрижка",
  },
  {
    name: "Гость 2ГИС",
    rating: 5,
    text: "Огромное спасибо салону Saadyan! Отдельное спасибо Дание за потрясающий макияж и Аиде за красивую причёску. Макияж и причёска — просто БОМБА!",
    date: "2ГИС",
    tag: "Образ под ключ",
  },
];

export const whyUs = [
  {
    icon: "Award",
    title: "Опытные мастера",
    text: "Каждый мастер — специалист в своей области с подтверждённым опытом и портфолио работ",
  },
  {
    icon: "Clock",
    title: "Стойкий макияж",
    text: "Макияж и причёска держатся весь день — от утренних сборов до позднего вечера",
  },
  {
    icon: "Heart",
    title: "Уютная атмосфера",
    text: "Комфортный интерьер, приятная музыка и заботливый сервис для каждой гостьи",
  },
  {
    icon: "CalendarCheck",
    title: "Удобная запись",
    text: "Записывайтесь в WhatsApp за минуту — выберите услугу, дату и время без звонков",
  },
];

export const branch = {
  name: "ЖК «8 квартал»",
  address: "ул. Жамбыла, 106 (мкр. Жас Оркен)",
  landmark: "рядом остановка «Казахский драматический театр»",
  mapEmbed: "https://2gis.kz/petropavlovsk/firm/70000001094471392",
};

export const footerLinks = [
  { label: "Instagram", href: salonInfo.instagram, icon: "Instagram" },
  { label: "WhatsApp", href: salonInfo.whatsapp, icon: "MessageCircle" },
  { label: "2ГИС", href: salonInfo.twoGis, icon: "MapPin" },
];
