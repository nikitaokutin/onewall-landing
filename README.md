# OneWall: лендинг

Одностраничный сайт магазина бамбуковых стеновых панелей [@onewall.vl](https://www.instagram.com/onewall.vl/)
(Владивосток, доставка по России). Задача страницы: прогреть посетителя и передать его
в личный WhatsApp продавца.

Дизайн повторяет структуру профиля Instagram: круглый логотип и ник в шапке и в хиро,
ряд «актуального» вместо меню, сетка серий как лента, тёмная тема, один тёплый акцент.

## Стек

- Next.js 16 (App Router, TypeScript), Tailwind CSS v4, shadcn/ui (`components/ui`)
- `motion/react` для появления секций, `lucide-react` для иконок
- Шрифты Unbounded + Manrope через `next/font` (кириллица включена)

## Запуск

```bash
npm install
npm run dev
```

Продакшен-сборка: `npm run build`, затем `npm start`.

## Что править

| Что | Где |
| --- | --- |
| Ссылка, куда ведёт кнопка «Написать Артёму» (WhatsApp, Instagram, Telegram) | `lib/site.ts` → `site.seller.whatsapp` |
| Цены, размер панели, доставка | `lib/site.ts` → `site.pricing` |
| Адрес шоурума, телефон | `lib/site.ts` → `site.showroom`, `site.seller` |
| Серии панелей и ссылки на Farpost | `lib/site.ts` → `series` |
| Фотографии секций | `lib/site.ts` → `photos` |
| Логотип | `public/brand/logo.jpg`, `app/icon.jpg`, `app/apple-icon.jpg` |
| Домен для OG-разметки | переменная окружения `NEXT_PUBLIC_SITE_URL` |

## Фотографии

Сейчас стоят стоковые фото с Unsplash: рендеры с Farpost несут водяной знак, а лента
Instagram состоит из обложек Reels с текстом. Замените на свои снимки объектов:

- `photos.hero`: главное фото в хиро
- `photos.before` и `photos.after`: одна и та же комната до и после монтажа (секция «До и после»)
- `series[].image`: по одному фото на серию
- `photos.living`, `photos.wood`, `photos.montage`, `photos.bedroom`, `photos.hallway`: бенто и «актуальное»

Локальные файлы кладите в `public/` и указывайте путь вида `/photos/hero.jpg`.
Для внешних ссылок домен нужно добавить в `next.config.ts` → `images.remotePatterns`.

## Структура

```
app/            layout (шрифты, метаданные), page (порядок секций), globals.css (тема)
components/ui/  shadcn: button, image-comparison-slider
components/landing/
  header, hero, highlights, benefits, series, price + calculator,
  before-after, process, proof, contacts, footer, reveal, primitives
lib/site.ts     все данные магазина
```
