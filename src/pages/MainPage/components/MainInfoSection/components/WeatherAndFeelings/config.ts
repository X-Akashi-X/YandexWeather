import Pollen from "@assets/icons/pollenIcon.svg";
import type { CurrentFeelingSlides, TodayFeelingSlides } from "@ts/props";
export const getFeelingSlide = (
  {
    currentPressure,
    currentPressureCategory,
    currentPollenCategory,
    currentUVCategory,
    currentUVIndex,
  }: CurrentFeelingSlides,
  {
    todayMagneticField,
    todayMagneticFieldCategory,
    todayMoonPhase,
  }: TodayFeelingSlides,
) => {
  return [
    {
      link: "/",
      img: Pollen,
      category: currentPollenCategory,
      title: "Пыльца",
      text: currentPollenCategory.text,
      classImg: "img_pollen",
      id: "Пыльца",
    },
    {
      link: "/",
      number: todayMagneticField,
      category: todayMagneticFieldCategory,
      title: "Магнитное поле",
      text: todayMagneticFieldCategory.text,
      id: "Магнитное поле",
    },
    {
      link: "/",
      number: currentPressure,
      category: currentPressureCategory,
      title: "Давление",
      text: currentPressureCategory.text,
      id: "Давление",
    },
    {
      link: "/",
      img: todayMoonPhase.icon,
      title: "Луна",
      text: todayMoonPhase.text,
      classImg: "img_moon",
      id: "Луна",
    },
    {
      link: "/",
      number: currentUVIndex,
      category: currentUVCategory,
      title: "УФ-индекс",
      text: currentUVCategory.text,
      id: "УФ-индекс",
    },
  ];
};
