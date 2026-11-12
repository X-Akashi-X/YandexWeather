import type {
  FAQMainAdvancedItems,
  FAQMainCurrentItems,
  FAQMainTodayItems,
  FAQMoonPhasesItem,
  FAQTodayPressureItems,
  FAQTomorrowPressureItems,
} from "@ts/props";
import type { MonthlyDailyDataDetails } from "@ts/weather";
import type { getMoonPhase } from "@utils/categories/categories";

export const getFAQMainItems = (
  {
    currentTemperature,
    currentApparentTemperature,
    currentWindSpeed,
    currentWindDirection,
    currentHumidity,
    currentPressure,
    currentWeatherInfo,
  }: FAQMainCurrentItems,
  {
    todayMinTemperature,
    todayMaxTemperature,
    todayPrecipitationProbability,
    todayMinMaxWindSpeed,
    todayWindGusts,
    todayMinHumidity,
    todayMaxHumidity,
    todayMinPressure,
    todayMaxPressure,
    todayWindCategory,
  }: FAQMainTodayItems,
  { morning, day, evening, night }: FAQMainAdvancedItems,
) => {
  return [
    {
      title: "Какая погода в Минске?",
      text: `Сейчас в Минске ${currentWeatherInfo}, температура воздуха${" "} 
      ${currentTemperature}°, ощущается как${" "} 
      ${currentApparentTemperature} 
      °. Ветер ${currentWindSpeed} м/с, ${currentWindDirection}, 
      влажность ${currentHumidity}%, атмосферное давление${" "} 
      ${currentPressure} мм рт. ст. Сегодня: ${todayMinTemperature}... 
      ${todayMaxTemperature}°, ${todayPrecipitationProbability},${" "} 
      ${todayWindCategory} ${todayMinMaxWindSpeed} м/с, порывы до${" "} 
      ${todayWindGusts} м/с.`,
      id: "weather",
    },
    {
      title: "Сколько градусов в Минске?",
      text: `Сейчас в Минске температура воздуха ${currentTemperature}°.
      Ощущается как ${currentApparentTemperature}°,
      ${currentWeatherInfo}. Температура утром${" "}
      ${morning.advancedTemperature}°, днем ${day.advancedTemperature}
      °, вечером ${evening.advancedTemperature}°, ночью${" "}
      ${night.advancedTemperature}°.`,
      id: "temp",
    },
    {
      title: "Какая скорость направления ветра в минске?",
      text: `Скорость ветра в Минске сейчас ${currentWindSpeed} м/с,${" "}
      ${currentWindDirection}. Утром ветер ${morning.advancedWindSpeed}${" "}
      м/с, ${morning.advancedWindDirectionText}, днем${" "}
      ${day.advancedWindSpeed} м/с, ${day.advancedWindDirectionText},
      вечером ${evening.advancedWindSpeed} м/с,${" "}
      ${evening.advancedWindDirectionText}, ночью${" "}
      ${night.advancedWindSpeed} м/с, ${night.advancedWindDirectionText}.
      Атмосферное давление ${todayMinPressure}-${todayMaxPressure} мм рт.
      ст., влажность ${todayMinHumidity}-${todayMaxHumidity}%, что также
      влияет на ощущение погоды.`,
      id: "wind",
    },
    {
      title: "Какая влажность воздуха в Минске?",
      text: `Сейчас влажность воздуха в Минске составляет ${currentHumidity}%.
      Уровень влажности утром ${morning.advancedHumidity}%, днем${" "}
      ${day.advancedHumidity}%, вечером ${evening.advancedHumidity}%,
      ночью ${night.advancedHumidity}%.`,
      id: "humidity",
    },
  ];
};

export const getFAQAllergiesItems = [
  {
    title: "Почему пыльца вызывает аллергию?",
    text: "Пыльца вызывает аллергию из-за белков, которые в ней содержатся. Эти белки могут спровоцировать оборонительную реакцию у иммунной системы некоторых людей — она воспринимает их как внешнюю угрозу, несмотря на то, что на самом деле они безвредны. Такая реакция порождает антитела, которые пытаются бороться с «опасностью», вызывая симптомы аллергии.",
    id: "whyAllergies",
  },
  {
    title: "Активность пыльцы — что это?",
    text: "Активность пыльцы рассчитывается по уникальной формуле, которая учитывает периоды цветения растений, прогноз погоды и сообщения от пользователей о самочувствии. Такой прогноз позволяет оценить, насколько сильным будет влияние конкретного аллергена на ваше самочувствие в определённый день.",
    id: "activity",
  },
  {
    title: "Карта пыльцы: как она помогает при поллинозе",
    text: "Карта пыльцы показывает уровни концентрации пыльцы в разных регионах. На ней показано, какие типы пыльцы преобладают в определённое время года и что помогает людям с аллергией на пыльцу лучше планировать свои действия. На основании карты пыльцы можно выбрать регион для временного переезда, где ваш аллерген не активен: например, уехать в Карелию.",
    id: "map",
  },
  {
    title: "Календарь цветения: как пользоваться?",
    text: "Календарь цветения показывает время цветения растений-аллергенов в разных регионах России. Используя его, нужно помнить: растения зацветают не в строго определённые даты, а тогда, когда сложатся подходящие погодные условия.",
    id: "calendar",
  },
  {
    title: "Может ли быть аллергия на семена тополя?",
    text: "Аллергия на семена тополя встречается редко. Большинство реакций, которые возникают у людей при контакте с семенами тополя, вызваны не самими семенами, а содержащейся в них пыльцой. Тополиный пух витает в воздухе одновременно с пыльцой многих других растений, поэтому люди могут думать, что у них аллергия на тополиный пух, хотя это не так.",
    id: "poplarSeeds",
  },
];

export const getFAQMagneticItems = [
  {
    title: "Вспышки на солнце — что это?",
    text: "Солнечная вспышка — это краткосрочное явление, когда в атмосфере Солнца из-за взрывных процессов выделяется энергия. Это приводит к резкому повышению яркости в некоторых диапазонах электромагнитного излучения.",
    id: "solarFlares",
  },
  {
    title: "Самая сильная магнитная буря",
    text: "Мощнейшая за историю наблюдений геомагнитная буря произошла в 1859 году. С 28 августа по 2 сентября на Солнце образовывались многочисленные вспышки. В итоге с 1 по 2 сентября случилась буря, которая привела к отказу телеграфных систем по Европе и Северной Америке. При этом Северное сияние можно было наблюдать даже на Карибах.",
    id: "StrongMagneticStorm",
  },
  {
    title: "Влияют ли магнитные бури на человека?",
    text: "Во множестве исследований о влиянии магнитных бурь на здоровье людей просто сопоставляется статистика медицинских случаев с зафиксированными вспышками на Солнце и магнитными штормами. Однако эта корреляция — не гарантия зависимости, она никак не описывает возможный механизм влияния деформаций магнитного поля Земли на наше самочувствие. Проще говоря, вопрос остаётся открытым и дискуссионным.",
    id: "InfluenceOnPeople",
  },
  {
    title: "Что такое магнитная буря?",
    text: "Магнитное поле Земли постоянно сопротивляется солнечному ветру. Но порой на Солнце случаются особо сильные вспышки, и тогда поток корональной массы обрушивается на магнитосферу с умноженной силой и скоростью, заставляя её сжиматься под давлением. Из-за этого возникают дополнительное напряжение в магнитном поле планеты и более интенсивное течение токов — так появляются магнитные бури.",
    id: "whatIsMagneticStorm",
  },
  {
    title: "Что такое северное сияние?",
    text: "Северное(полярное) сияние — оптическое явление, это яркое свечение верхних слоёв атмосферы, возникающее из-за того, что магнитосфера Земли взаимодействует с заряженными частицами солнечного ветра.",
    id: "aurora",
  },
];

export const getFAQPressureItems = (
  { todayPressure }: FAQTodayPressureItems,
  { tomorrowPressure }: FAQTomorrowPressureItems,
) => {
  return [
    {
      title: "Что такое атмосферное давление?",
      text: "Атмосферное давление — это сила, с которой воздух давит на земную поверхность. На каждый квадратный сантиметр поверхности земли воздух оказывает давление в 1,033 кг.",
      id: "whatIsPressure",
    },
    {
      title: "Как атмосферное давление влияет на погоду?",
      text: "Изменчивая природа атмосферного давления связана с появлением и перемещением огромных масс воздуха, которые напрямую влияют на погоду. Воздушные вихри с пониженным давлением в центре и радиусом, длина которого может достигать тысяч километров, называются циклонами.",
      id: "influenceOnNature",
    },
    {
      title: "Какая норма атмосферного давления?",
      text: "Норма атмосферного давления для человека — 760 мм ртутного столба. Этот показатель считается самым комфортным для человека. Однако в зависимости от высоты норма давления меняется: чем выше, тем величина ниже.",
      id: "normOfPressure",
    },
    {
      title: "Какое атмосферное давление в Минске?",
      text: `Атмосферное давление в Минске сегодня ${todayPressure} мм рт. ст.. Прогноз давления на завтра — ${tomorrowPressure} мм рт. ст.. Давление в Минске повышенное`,
      id: "whichIsPressure",
    },
    {
      title: "Чем измеряют атмосферное давление?",
      text: "Для измерения атмосферного давления используют специальный прибор барометр, которые могут быть: ртутными, жидкостными, механическими и электронными. Как единицу измерения атмосферного давления принято брать миллиметры ртутного столба (мм.рт.ст.). Иногда давление измеряют в гектопаскалях (гПа).",
      id: "whichIsMeasure",
    },
  ];
};

export const getFAQMoonDayItems = ({
  details,
  moonPhase,
}: {
  details: MonthlyDailyDataDetails;
  moonPhase: ReturnType<typeof getMoonPhase>;
}) => {
  return [
    {
      title: "Что такое фазы Луны?",
      text: "Фазы Луны — это визуальные перемены освещённой части Луны. Визуальные — потому что Луна не меняется в действительности, это мы видим её определённым образом. Освещённость Луны меняется потому, что сама Луна вращается вокруг Земли, и Солнце освещает разные стороны нашего спутника по очереди. Из-за этого для нас облик Луны постоянно меняется.",
      id: "whatIsMoonPhase",
    },
    {
      title: "Что такое полнолуние?",
      text: "Через 14,8 дня после новолуния Луна находится чётко напротив Солнца. Это полнолуние. Солнце освещает Луну полностью, с Земли виден целиком освещённый лунный диск. Эта фаза противоположна новолунию, она самая яркая.",
      id: "whatIsFullMoon",
    },
    {
      title: "Почему меняются фазы Луны?",
      text: "Фазы Луны связаны с положением, которое занимает Луна на земной орбите. Взаимное расположение Луны, Земли и Солнца постоянно изменяется, солнечный свет попадает на разные части Луны, смещается лунный терминатор — граница между освещённой и неосвещёнными частями её диска. По этой причине очертания Луны кажутся другими.",
      id: "whyDoMoonsPhasesChange",
    },
    {
      title: "Какая Луна сегодня в Минске?",
      text: `Сегодня в Минске Луна находится в фазе ${moonPhase.text.charAt(0).toUpperCase() + moonPhase.text.slice(1)}. Освещенность Луны составляет ${details.visibility}%. Сегодня Луна взойдет в ${details.moonrise}. Луна зайдет за горизонт в ${details.moonset}.`,
      id: "whichIsPhaseToday",
    },
  ];
};

export const getFAQMoonPhasesItems = ({
  newMoon,
  waxingMoon,
  fullMoon,
  waningMoon,
  currentMonth,
}: FAQMoonPhasesItem) => {
  const currentFormattedMonth = currentMonth.monthly
    .replace(/[ьй]$/, "е")
    .replace(/([гтсп]$)/, "$1е")
    .toLowerCase();

  const monthLongFormatted = (monthOfPhase: string) => {
    return monthOfPhase
      .replace(/[ьй]$/, "я")
      .replace(/([гтсп]$)/, "$1а")
      .toLowerCase();
  };

  const handleChangeDates = (
    month: string,
    firstDay: number,
    lastDay: number,
  ) => {
    if (firstDay === lastDay) {
      return `${firstDay} ${monthLongFormatted(month)}`;
    }

    return `с ${firstDay} по ${lastDay} ${monthLongFormatted(month)}`;
  };

  return [
    {
      title: `Когда Новолуние в ${currentFormattedMonth}?`,
      text: `Новолуние наступает ${handleChangeDates(newMoon.monthLong, newMoon.firstDay, newMoon.lastDay)}`,
      id: "whenNewMoon",
    },
    {
      title: `Когда будет Растущая Луна в ${currentFormattedMonth}?`,
      text: `Растущая Луна будет ${handleChangeDates(waxingMoon.monthLong, waxingMoon.firstDay, waxingMoon.lastDay)}`,
      id: "whenWaxingMoon",
    },
    {
      title: `Когда Полнолуние в ${currentFormattedMonth}?`,
      text: `Полнолуние наступает ${handleChangeDates(fullMoon.monthLong, fullMoon.firstDay, fullMoon.lastDay)}`,
      id: "whenFullMoon",
    },
    {
      title: `Когда будет Убывающая Луна в ${currentFormattedMonth}?`,
      text: `Убывающая Луна будет ${handleChangeDates(waningMoon.monthLong, waningMoon.firstDay, waningMoon.lastDay)}`,
      id: "whenWaningMoon",
    },
  ];
};
