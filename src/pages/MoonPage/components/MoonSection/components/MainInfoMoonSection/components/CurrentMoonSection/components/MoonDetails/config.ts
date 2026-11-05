import type { MoonDetailsItems } from "@ts/props";

export const moonDetailsConfig = ({
  todayMoonrise,
  todayMoonset,
  todayMoonVisibility,
  todayMoonAge,
}: MoonDetailsItems) => {
  return [
    { title: "Видимость", info: `${todayMoonVisibility} %`, id: "visibility" },
    { title: "Возраст", info: `${todayMoonAge} дня`, id: "age" },
    { title: "Восход", info: todayMoonrise, id: "moonrise" },
    { title: "Заход", info: todayMoonset, id: "moonset" },
  ];
};
