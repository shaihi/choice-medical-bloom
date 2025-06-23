
import { Card } from "./ui/card";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50" role="region" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-1 gap-12 justify-center">
          <div className="space-y-8 max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#1CC5DC]" aria-hidden="true" />
              <div>
                <p className="text-gray-600">
                  <a 
                    href="mailto:contactus@choicemedical.health" 
                    className="hover:text-[#1CC5DC] transition-colors focus:text-[#1CC5DC]"
                    aria-label="Send email to Choice Medical"
                  >
                    contactus@choicemedical.health
                  </a>
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
