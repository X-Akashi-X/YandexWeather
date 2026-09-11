import { AppGallery, AppStore, GooglePlay } from ".";
export const cities = [
  { title: "Минск", id: "Минск" },
  { title: "Брест", id: "" },
  { title: "Витебск", id: "Витебск" },
  { title: "Гродно", id: "Гродно" },
  { title: "Гомель", id: "Гомель" },
];

export const services = [
  {
    link: "https://yandex.ru/support/weather/",
    title: "Справка",
    id: "Справка",
  },
  {
    link: "https://yandex.ru/support/weather/ru/troubleshooting.html",
    title: "Обратная связь",
    id: "Обратная связь",
  },
  {
    link: "https://yandex.ru/pogoda/b2b?utm_source=yandex&utm_medium=referral&utm_content=footer__business_solutions",
    title: "Для бизнеса",
    id: "Для бизнеса",
  },
  {
    link: "https://yandex.ru/pogoda/b2b/smarthome",
    title: "Для умного дома",
    id: "Для умного дома",
  },
  {
    link: "https://yandex.by/legal/weather_termsofuse/ru/",
    title: "Пользовательское соглашение",
    id: "Пользовательское соглашение",
  },
];

export const forecast = [
  { link: "/", title: "Прогноз погоды", id: "Прогноз погоды" },
  { link: "/", title: "Погода на месяц", id: "Погода на месяц" },
  { link: "/", title: "Карта погоды", id: "Карта погоды" },
  { link: "/", title: "Погода на 10 дней", id: "Погода на 10 дней" },
  { link: "/", title: "УФ-Индекс", id: "УФ-Индекс" },
  { link: "/", title: "Магнитные бури", id: "Магнитные бури" },
  { link: "/", title: "Атмосферное давление", id: "Атмосферное давление" },
  { link: "/", title: "Фазы Луны", id: "Фазы Луны" },
];

export const partners = [
  {
    link: "https://yandex.by/adv/products/context",
    title: "Реклама",
    id: "Реклама",
  },
  {
    link: "https://yandex.ru/pogoda/b2b?utm_source=footer",
    title: "API Яндекс.Погоды",
    id: "API Яндекс.Погоды",
  },
];

export const stores = [
  {
    link: "https://play.google.com/store/apps/details?id=ru.yandex.weatherplugin",
    img: GooglePlay,
    id: "GooglePlay",
  },
  {
    link: "https://apps.apple.com/us/app/yandex-maps-navigator/id313877526",
    img: AppStore,
    id: "AppStore",
  },
  {
    link: "https://appgallery.huawei.com/app/C101219645",
    img: AppGallery,
    id: "AppGallery",
  },
];
