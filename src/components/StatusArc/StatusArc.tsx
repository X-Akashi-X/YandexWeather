import { useEffect, useRef, useState } from "react";

const StatusArc = ({
  category = { fill: 0, color: "#9ca3af" },
}: {
  category?: { fill: number; color: string };
}) => {
  const { fill, color } = category;

  const arcLength = 230;

  const safeFill = Math.min(Math.max(fill, 0), 1);
  const dash = safeFill * arcLength;

  const pathRef = useRef<SVGPathElement | null>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const point = pathRef.current.getPointAtLength(dash);
      setPos({ x: point.x, y: point.y });
    }
  }, [dash]);

  const pathD = "M11.45 72.5a44 44 0 1 1 73.1 0";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 96 77"
      overflow="visible"
    >
      <path
        ref={pathRef}
        id="p"
        d={pathD}
        stroke="#e0e0e0"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d={pathD}
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${dash} ${arcLength}`}
      />

      <circle cx={pos.x} cy={pos.y} r="12" fill="#ffffff" />

      <circle cx={pos.x} cy={pos.y} r="8" fill={color} />
    </svg>
  );
};

export default StatusArc;
