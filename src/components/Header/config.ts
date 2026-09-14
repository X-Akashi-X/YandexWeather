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
  { imgTextTitle: "Ru",
    title: "Выбор языка",
    id: "Выбор языка" },
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
