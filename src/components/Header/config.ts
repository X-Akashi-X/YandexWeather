import { Help, Notifications, Pollen, Support, TG, Units } from ".";

export const navigationItems = [
  {
    imgTitle: Pollen,
    title: "Мои аллергены",
    id: "Мои аллергены",
  },
  {
    imgTitle: Notifications,
    title: "Уведомления о погоде",
    id: "Уведомления о погоде",
  },
  {
    imgTitle: Units,
    title: "Единицы измерений",
    id: "Единицы измерений",
  },
  { imgTextTitle: "Ru", title: "Выбор языка", id: "Выбор языка" },
  {
    imgTitle: Help,
    title: "Справка",
    link: "https://yandex.ru/support/weather/ru/",
    id: "Справка",
  },
  {
    imgTitle: Support,
    title: "Обратная связь",
    link: "https://yandex.ru/support/weather/troubleshooting.xml",
    id: "Обратная связь",
  },
  {
    imgTitle: TG,
    title: "Тепло в нашем ТГ-канале",
    link: "https://t.me/yandex_weather",
    id: "Тепло в нашем ТГ-канале",
  },
];

export const navLinks = [
  { link: "/", title: "Главная", id: "Главная" },
  { link: "/onMonth", title: "На месяц", id: "На месяц" },
  { link: "/onMap", title: "На карте", id: "На карте" },
];

export const forecastLinks = [
  { link: "/", title: "На 10 дней", id: "На 10 дней" },
  { link: "/", title: "На сегодня", id: "На сегодня" },
  { link: "/", title: "На завтра", id: "На завтра" },
  { link: "/", title: "Прогноз на 3 дня", id: "Прогноз на 3 дня" },
  { link: "/", title: "Прогноз на 5 дней", id: "Прогноз на 5 дней" },
  { link: "/", title: "Прогноз на 7 дней", id: "Прогноз на 7 дней" },
  { link: "/", title: "Прогноз на 14 дня", id: "Прогноз на 14 дня" },
  { link: "/", title: "Прогноз на выходные", id: "Прогноз на выходные" },
  { link: "/", title: "Активность пыльцы", id: "Активность пыльцы" },
  { link: "/", title: "Магнитные бури", id: "Магнитные бури" },
  { link: "/", title: "Фазы луны", id: "Фазы луны" },
  { link: "/", title: "УФ-индекс", id: "УФ-индекс" },
  { link: "/", title: "Атмосферное давление", id: "Атмосферное давление" },
  { link: "/", title: "Статьи о погоде", id: "Статьи о погоде" },
];
