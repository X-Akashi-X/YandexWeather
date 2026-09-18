import { clear, cloudy, fog, partly, rain, snow, thunder } from ".";

export const weatherMap = {
  clear: { codes: [0, 1], text: "Ясно", icon: clear, weight: 5, },
  partly: { codes: [2], text: "Облачно с прояснениями", icon: partly, weight: 62, },
  cloudy: { codes: [3], text: "Облачно", icon: cloudy, weight: 2, },
  fog: { codes: [45, 48], text: "Туманно", icon: fog, weight: 2, },
  rain: {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    text: "Дождь",
    icon: rain,
    weight: 1,
  },
  snow: { codes: [71, 73, 75, 77, 85, 86], text: "Снегопад", icon: snow, weight: 2, },
  thunder: { codes: [95, 96, 99], text: "Гроза", icon: thunder, weight: 2, },
};
