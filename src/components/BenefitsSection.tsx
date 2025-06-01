
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
            <div className="w-16 h-16 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
                alt="Medical precision targeting symbol representing accurate biopsy guidance"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Precision Guidance</h3>
            <p className="text-gray-600">Advanced marking technology ensures accurate biopsy targeting and improved patient outcomes.</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
                alt="Medical safety shield icon representing enhanced patient protection"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Patient Safety</h3>
            <p className="text-gray-600">Innovative solutions designed with patient-centric approach for enhanced safety protocols.</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
                alt="Medical excellence badge representing superior clinical outcomes"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
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
