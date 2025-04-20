
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FFDEE2]/30 to-[#D3E4FD]/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#33C3F0] hover:bg-[#33C3F0]/90">
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#33C3F0]" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#33C3F0]" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p className="text-gray-600">contact@choicemedical.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
