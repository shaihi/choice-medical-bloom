
const DisclaimerBanner = () => {
  return (
    <div 
      id="disclaimer" 
      className="sticky top-16 z-40 bg-red-600 text-white py-3 px-6 text-center text-sm font-medium shadow-md"
    >
      <div className="max-w-7xl mx-auto">
        CAUTION — Investigational Device. Limited by Federal law to investigational use. Not for sale.
      </div>
    </div>
  );
};

export default DisclaimerBanner;
