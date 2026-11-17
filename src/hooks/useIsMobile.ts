import { useEffect, useState } from "react";

/**
 * Custom React hook that tracks whether the browser viewport width is less than or equal to a specified breakpoint.
 * Automatically updates on window resize events.
 *
 * @param breakpoint - The maximum viewport width in pixels to be considered mobile.
 * @returns `true` if `window.innerWidth` is less than or equal to `breakpoint`, otherwise `false`.
 */
export const useIsMobile = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
