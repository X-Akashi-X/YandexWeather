import clear from "@assets/icons/weatherEffects/clearIcon.svg";
import cloudy from "@assets/icons/weatherEffects/cloudyIcon.svg";
import fog from "@assets/icons/weatherEffects/fogIcon.svg";
import partly from "@assets/icons/weatherEffects/partlyIcon.svg";
import rain from "@assets/icons/weatherEffects/rainIcon.svg";
import snow from "@assets/icons/weatherEffects/snowIcon.svg";
import thunder from "@assets/icons/weatherEffects/thunderIcon.svg";

export const weatherMap = {
  clear: { codes: [0, 1], text: "Ясно", icon: clear },
  partly: { codes: [2], text: "Облачно с прояснениями", icon: partly },
  cloudy: { codes: [3], text: "Облачно", icon: cloudy },
  fog: { codes: [45, 48], text: "Туманно", icon: fog },
  rain: {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    text: "Дождь",
    icon: rain,
  },
  snow: { codes: [71, 73, 75, 77, 85, 86], text: "Снегопад", icon: snow },
  thunder: { codes: [95, 96, 99], text: "Гроза", icon: thunder },
};
