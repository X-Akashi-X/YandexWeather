import newMoon from "@assets/icons/moon/newMoonIcon.svg";
import waxingSmall from "@assets/icons/moon/waxingSmallIcon.svg";
import firsthQuarter from "@assets/icons/moon/quarterFirstIcon.svg";
import waxingBig from "@assets/icons/moon/waxingBigIcon.svg";
import fullMoon from "@assets/icons/moon/fullMoonIcon.svg";
import waningBig from "@assets/icons/moon/waningBigIcon.svg";
import lastQuarter from "@assets/icons/moon/quarterLastIcon.svg";
import waningSmall from "@assets/icons/moon/waningSmallIcon.svg";

export function moonMap(category: number) {
  if (category <= 0.04) return { text: "новолуние", icon: newMoon };
  if (category <= 0.22) return { text: "молодая", icon: waxingSmall };
  if (category <= 0.28) return { text: "первая 1/4", icon: firsthQuarter };
  if (category <= 0.46) return { text: "растущая", icon: waxingBig };
  if (category <= 0.54) return { text: "полнолуние", icon: fullMoon };
  if (category <= 0.72) return { text: "убывающая", icon: waningBig };
  if (category <= 0.78) return { text: "последняя 1/4", icon: lastQuarter };
  if (category <= 0.96) return { text: "старая", icon: waningSmall };
  return { text: "новолуние", icon: newMoon };
}
