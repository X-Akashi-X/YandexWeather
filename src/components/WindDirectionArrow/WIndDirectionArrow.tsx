const WIndDirectionArrow = ({ windDirection }: { windDirection: number }) => {
  return (
    <svg
      style={{ transform: `rotate(${windDirection}deg)` }}
      viewBox="0 0 24 24"
      width="12"
      height="12"
    >
      <path
        d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
        fill="var(--color-light-grey)"
      />
    </svg>
  );
};

export default WIndDirectionArrow;
