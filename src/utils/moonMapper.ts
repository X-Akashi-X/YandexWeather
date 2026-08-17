import newMoon from "@assets/icons/moon/newMoonIcon.svg";
import waxingSmall from "@assets/icons/moon/waxingSmallIcon.svg";
import firsthQuarter from "@assets/icons/moon/quarterFirstIcon.svg";
import waxingBig from "@assets/icons/moon/waxingBigIcon.svg";
import fullMoon from "@assets/icons/moon/fullMoonIcon.svg";
import waningBig from "@assets/icons/moon/waningBigIcon.svg";
import lastQuarter from "@assets/icons/moon/quarterLastIcon.svg";
import waningSmall from "@assets/icons/moon/waningSmallIcon.svg";

export function moonMap(category: number) {
  if (category < 0.04) return { text: "новолуние", icon: newMoon };
  if (category < 0.22) return { text: "молодая луна", icon: waxingSmall };
  if (category < 0.28)
    return { text: "первая четверть фазы", icon: firsthQuarter };
  if (category < 0.46) return { text: "растущая луна", icon: waxingBig };
  if (category < 0.54) return { text: "полнолуние", icon: fullMoon };
  if (category < 0.72) return { text: "убывающая луна", icon: waningBig };
  if (category < 0.78)
    return { text: "последняя четверть фазы", icon: lastQuarter };
  if (category < 0.96) return { text: "старая луна", icon: waningSmall };
  return { text: "новолуние", icon: newMoon };
}
