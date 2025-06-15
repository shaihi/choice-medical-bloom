
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
                src="/lovable-uploads/no_metal.png"
                alt="No entrance to metal image depicting no metal inside"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">No metal</h3>
            <p className="text-gray-600">Same marking capabilities without any metals inside</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6">
              <img
                src="/lovable-uploads/patient_safety.png"
                alt="Image of a woman with breast cancer ribbon depicting safety"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Patient Safety</h3>
            <p className="text-gray-600">Innovative solutions designed with that reduce patient anxiety.</p>
          </Card>
          
          <Card className="p-8 text-center bg-white border border-gray-200 rounded-sm shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6">
              <img
                src="/lovable-uploads/degrade_right.png"
                alt="Hand holding material depicting degradation"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1C33] mb-4">Degrades exaclty right</h3>
            <p className="text-gray-600">Built to degrade for the amount of time necessary for clinical needs.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
