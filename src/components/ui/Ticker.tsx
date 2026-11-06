const items = [
  "Web products",
  "Mobile apps",
  "Backend systems",
  "Product design",
  "Interface engineering",
  "Realtime experiences",
];

const Ticker = () => {
  return (
    <div className="overflow-hidden border-b border-pine-deep bg-pine py-3 text-chalk">
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-5 font-mono text-[9px] uppercase tracking-[0.2em]"
          >
            <span>{item}</span>
            <span className="ml-1 h-1 w-1 rotate-45 bg-apricot" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
