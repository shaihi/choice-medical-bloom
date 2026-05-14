
const DisclaimerBanner = () => {
  return (
    <div
      id="disclaimer"
      className="fixed bottom-0 left-0 right-0 z-40 px-6 py-2 text-center text-sm font-medium border-t border-[#1CC5DC]/20 bg-[#0A1C33]/95 backdrop-blur-sm"
    >
      <aside
        role="note"
        aria-labelledby="disclaimer-title"
        className="max-w-7xl mx-auto text-white/60"
      >
        <h2 id="disclaimer-title" className="sr-only">
          FDA investigational-use disclaimer
        </h2>
        <p>
          Caution — Investigational device. Limited by Federal law to
          investigational use. Not for sale.
        </p>
      </aside>
    </div>
  );
};

export default DisclaimerBanner;
