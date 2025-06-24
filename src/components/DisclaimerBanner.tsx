
const DisclaimerBanner = () => {
  return (
    <div
      id="disclaimer"
      className="fixed bottom-0 left-0 right-0 z-40 px-6 py-2 text-center text-sm font-medium shadow-md bg-orange-400"
    >
      <aside
        role="note"
        aria-labelledby="disclaimer-title"
        className="max-w-7xl mx-auto text-gray-800"
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
