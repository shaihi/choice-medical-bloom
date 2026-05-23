import { Card } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { lang, t } = useLanguage();
  const privacy = t.privacyPolicy;
  const dateLocale = lang === "fr" ? "fr-FR" : "en-US";
  const updatedAt = new Date().toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="privacy" className="py-24 bg-white" role="region" aria-label={privacy.ariaLabel}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          {privacy.title}
        </h1>
        
        <Card className="p-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.dataController.title}</h2>
            <p>
              {privacy.dataController.name}<br />
              {privacy.dataController.emailLabel}: contactus@choicemedical.health
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.dataWeCollect.title}</h2>
            <p>
              {privacy.dataWeCollect.intro}
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {privacy.dataWeCollect.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.legalBasis.title}</h2>
            <p>
              {privacy.legalBasis.intro}
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {privacy.legalBasis.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.howWeUse.title}</h2>
            <p>{privacy.howWeUse.intro}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {privacy.howWeUse.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.dataSharing.title}</h2>
            <p>
              {privacy.dataSharing.intro}
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {privacy.dataSharing.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.rights.title}</h2>
            <p>{privacy.rights.intro}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {privacy.rights.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {privacy.rights.contact}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.dataRetention.title}</h2>
            <p>
              {privacy.dataRetention.body}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.cookies.title}</h2>
            {privacy.cookies.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "mb-4" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.contactComplaints.title}</h2>
            {privacy.contactComplaints.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 1 ? "mt-2" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">{privacy.changes.title}</h2>
            <p>
              {privacy.changes.body}
            </p>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>{privacy.lastUpdated}: {updatedAt}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
