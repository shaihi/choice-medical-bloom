import { useState } from "react";
import { Mail } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

type InquiryType = "investor" | "partner" | "physician" | "other";

const inquiryLabels: Record<InquiryType, string> = {
  investor: "Investor",
  partner: "Industry Partner",
  physician: "Physician / Clinician",
  other: "Other",
};

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<InquiryType>("investor");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryLabels[type]}] Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Choice Medical team,\n\nMy name is ${name} and I'm reaching out as a ${inquiryLabels[type]}.\n\n${message}\n\nBest,\n${name}\n${email}`
    );
    window.location.href = `mailto:contactus@choicemedical.health?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white" role="region" aria-label="Contact Information">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: pitch */}
          <div>
            <p className="text-[#1CC5DC] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1C33] mb-6 leading-tight">
              Let's build the future of breast care together.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We're currently raising our seed round and actively meeting with investors, industry partners, and clinical advisors. If you see the opportunity we see, we'd love to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1CC5DC]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1CC5DC]" aria-hidden="true" />
                </div>
                <a
                  href="mailto:contactus@choicemedical.health"
                  className="text-[#0A1C33] hover:text-[#1CC5DC] transition-colors font-medium"
                  aria-label="Send email to Choice Medical"
                >
                  contactus@choicemedical.health
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#0A1C33] mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#0A1C33] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CC5DC] focus:border-transparent transition bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@fund.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#0A1C33] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CC5DC] focus:border-transparent transition bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact-type" className="block text-sm font-medium text-gray-700 mb-1">
                  I'm reaching out as
                </label>
                <select
                  id="contact-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as InquiryType)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#0A1C33] focus:outline-none focus:ring-2 focus:ring-[#1CC5DC] focus:border-transparent transition bg-white"
                >
                  {(Object.keys(inquiryLabels) as InquiryType[]).map((key) => (
                    <option key={key} value={key}>
                      {inquiryLabels[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a little about yourself or what you're looking for..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#0A1C33] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1CC5DC] focus:border-transparent transition resize-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-semibold px-6 py-3 rounded-lg transition-all hover:scale-[1.02] focus:ring-2 focus:ring-[#1CC5DC] focus:ring-offset-2 shadow-md shadow-[#1CC5DC]/20"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                This will open your email client with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
