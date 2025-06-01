
import { Card } from "./ui/card";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 bg-[#1CC5DC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#1CC5DC] rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Precision Guidance</h3>
            <p className="text-gray-600">Advanced marking technology ensures accurate biopsy targeting and improved patient outcomes.</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 bg-[#1CC5DC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#1CC5DC] rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Patient Safety</h3>
            <p className="text-gray-600">Innovative solutions designed with patient-centric approach for enhanced safety protocols.</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 bg-[#1CC5DC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#1CC5DC] rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Clinical Excellence</h3>
            <p className="text-gray-600">Cutting-edge technology supporting healthcare professionals in delivering superior care.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
