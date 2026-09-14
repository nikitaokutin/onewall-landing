/**
 * Единый источник правды о магазине.
 * Всё, что может меняться (ссылки, цены, адрес), правится здесь.
 */

export const site = {
  name: "OneWall",
  handle: "onewall.vl",
  city: "Владивосток",
  tagline: "Бамбуковые стеновые панели с доставкой по России",

  // Куда ведёт прогрев. Сейчас это WhatsApp Артёма из шапки Instagram.
  // Если нужно вести на личный Instagram или Telegram, поменяйте ссылку здесь.
  seller: {
    name: "Артём",
    phone: "+7 914 691-89-79",
    phoneHref: "tel:+79146918979",
    whatsapp:
      "https://wa.me/79146918979?text=" +
      encodeURIComponent("Здравствуйте! Пишу с сайта OneWall, хочу узнать про бамбуковые панели."),
    instagram: "https://www.instagram.com/onewall.vl/",
    farpost: "https://www.farpost.ru/user/OneWall/",
    email: "karmanov97@gmail.com",
  },

  stats: {
    followers: "26,5 тыс.",
    yearsOnFarpost: "10 лет",
  },

  showroom: {
    address: "ул. Бородинская 46/50, ТЦ «Виктория», 2 этаж, пав. 100",
    note: "Перед визитом позвоните или напишите: можем быть на выезде на замере.",
    mapsHref: "https://yandex.ru/maps/?text=" + encodeURIComponent("Владивосток, Бородинская 46/50"),
  },

  pricing: {
    perSqm: 2000,
    perPanel: 6900,
    perPanelMetallic: 11900,
    panel: { width: 1200, height: 2800, thickness: 8 }, // мм
    deliveryCity: 5000,
    deliveryToCarrier: 5000,
  },
} as const;

export type Series = {
  slug: string;
  name: string;
  short: string;
  price: number;
  image: string;
  farpost: string;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

/** Серии панелей из каталога на Farpost. Фото: подмените на свои из Instagram. */
export const series: Series[] = [
  {
    slug: "derevo",
    name: "Дерево",
    short: "Тёплые древесные оттенки, самая популярная серия",
    price: 6900,
    image: u("1621293954908-907159247fc8"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-serija-derevo-2800-1200-8mm-131969115.html",
  },
  {
    slug: "odnotonnye",
    name: "Однотонные",
    short: "Спокойные матовые цвета под любой интерьер",
    price: 6900,
    image: u("1617325247661-675ab4b64ae2"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-odnotonnye-2800-1200-8mm-131969757.html",
  },
  {
    slug: "tkan",
    name: "Ткань",
    short: "Фактура льна и рогожки без единого шва",
    price: 6900,
    image: u("1616137422495-1e9e46e2aa77"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-serija-tkan-2800-1200-8mm-131969889.html",
  },
  {
    slug: "kozha",
    name: "Кожа",
    short: "Мягкий кожаный рельеф для спальни и гостиной",
    price: 6900,
    image: u("1600489000022-c2086d79f9d4"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-ottenok-kozha-2800-1200-8mm-131970068.html",
  },
  {
    slug: "mramor",
    name: "Мрамор",
    short: "Светлый и тёмный мрамор за ТВ-зоной",
    price: 6900,
    image: u("1600607688066-890987f18a86"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-serija-mramor-2800-1200-8mm-131970097.html",
  },
  {
    slug: "kamen",
    name: "Камень",
    short: "Графит и бетон для строгих интерьеров",
    price: 6900,
    image: u("1604709177225-055f99402ea3"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-serija-kamen-2800-1200-8mm-131970176.html",
  },
  {
    slug: "metallik",
    name: "Металлик",
    short: "Золото, медь и серебро с глубоким блеском",
    price: 11900,
    image: u("1600566752355-35792bedcfea"),
    farpost:
      "https://www.farpost.ru/vladivostok/home/materials/ceiling/bambukovye-stenovye-paneli-ottenok-metallik-2800-1200-8mm-131970236.html",
  },
];

/** Фото для секций. Замените на реальные снимки объектов. */
export const photos = {
  hero: u("1621293954908-907159247fc8", 1600),
  heroAlt: "Гостиная с бамбуковыми панелями и тёплой подсветкой",
  before: u("1581858726788-75bc0f6a952d", 1600),
  after: u("1600585154084-4e5fe7c39198", 1600),
  design: u("1581094288338-2314dddb7ece", 1200),
  montage: u("1513467535987-fd81bc7d62f8", 1200),
  bedroom: u("1615874694520-474822394e73", 1200),
  living: u("1600585152915-d208bec867a1", 1200),
  wood: u("1604014237800-1c9102c219da", 1200),
};
