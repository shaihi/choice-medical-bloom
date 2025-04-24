
import { Card } from "./ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FFDEE2]/30 to-[#D3E4FD]/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-1 gap-12 justify-center">
          <div className="space-y-8 max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#33C3F0]" />
              <div>
                <p className="text-gray-600">
                  <a href="mailto:contact@choicemedical.health">contact@choicemedical.health</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

