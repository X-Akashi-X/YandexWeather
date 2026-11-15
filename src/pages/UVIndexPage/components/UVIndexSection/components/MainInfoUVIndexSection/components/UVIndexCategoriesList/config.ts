import {
  cap,
  extremeMinUV,
  glasses,
  highMinUV,
  home,
  lowMinUV,
  mediumMinUV,
  shirt,
  spf,
  veryHighMinUV,
} from ".";

export const UVCategories = [
  {
    categoryImg: lowMinUV,
    categoryRange: "0-2",
    category: "Низкий",
    categoryAttributes: [],
    id: "low",
  },
  {
    categoryImg: mediumMinUV,
    categoryRange: "3-5",
    category: "Умеренный",
    categoryAttributes: [spf, cap],
    id: "medium",
  },
  {
    categoryImg: highMinUV,
    categoryRange: "6-7",
    category: "Высокий",
    categoryAttributes: [spf, cap, glasses],
    id: "high",
  },
  {
    categoryImg: veryHighMinUV,
    categoryRange: "8-10",
    category: "Очень высокий",
    categoryAttributes: [spf, cap, glasses, shirt],
    id: "veryHigh",
  },
  {
    categoryImg: extremeMinUV,
    categoryRange: "11+",
    category: "Экстремальный",
    categoryAttributes: [spf, cap, glasses, shirt, home],
    id: "extreme",
  },
];
