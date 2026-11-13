import type { DefaultMoonDetailsItems } from "@ts/props";

export const moonDetailsConfig = ({
  visibility,
  age,
  moonrise,
  moonset,
}: DefaultMoonDetailsItems) => {
  return [
    { title: "Видимость", info: `${visibility} %`, id: "visibility" },
    { title: "Возраст", info: `${age} дня`, id: "age" },
    { title: "Восход", info: moonrise, id: "moonrise" },
    { title: "Заход", info: moonset, id: "moonset" },
  ];
};
