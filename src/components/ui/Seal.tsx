interface ISeal {
  id: string;
  label: string;
  className?: string;
}

const Seal = ({ id, label, className = "" }: ISeal) => {
  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full border border-line-strong bg-paper/70 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id={id}
            d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
            fill="none"
          />
        </defs>
        <text className="fill-pine font-mono uppercase" fontSize="10.5">
          <textPath
            href={`#${id}`}
            textLength="474"
            lengthAdjust="spacing"
          >
            {label}
          </textPath>
        </text>
      </svg>
      <span className="font-display text-lg font-semibold tracking-[-0.04em] text-pine sm:text-xl">
        MK
      </span>
    </div>
  );
};

export default Seal;
