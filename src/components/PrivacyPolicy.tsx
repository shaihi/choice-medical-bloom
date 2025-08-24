import { Card } from "./ui/card";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-24 bg-white" role="region" aria-label="Privacy Policy">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          Privacy Policy
        </h1>
        
        <Card className="p-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Data Controller</h2>
            <p>
              Choice Medical Health<br />
              Email: contactus@choicemedical.health
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Data We Collect</h2>
            <p>
              We collect minimal personal data when you contact us via email:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Email address (when you contact us)</li>
              <li>Any information you voluntarily provide in your message</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Legal Basis for Processing</h2>
            <p>
              We process your personal data based on:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Legitimate Interest:</strong> To respond to your inquiries and provide information about our medical devices</li>
              <li><strong>Consent:</strong> When you voluntarily contact us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">How We Use Your Data</h2>
            <p>We use your personal data exclusively to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to your inquiries</li>
              <li>Provide information about our medical devices and research</li>
              <li>Maintain records of our communications for regulatory compliance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal data with third parties except:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>When required by law or regulatory authorities</li>
              <li>To protect our legal rights or safety</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at: contactus@choicemedical.health
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes outlined above, 
              typically no longer than 2 years after our last communication, unless required by law to retain it longer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Cookies and Tracking</h2>
            <p className="mb-4">
              Our website uses essential cookies necessary for functionality (such as remembering your preferences). 
              With your explicit consent, we may load third-party tools (GPTEngineer platform script) that could 
              collect data according to their own privacy policies.
            </p>
            <p>
              You can manage your cookie preferences through the cookie consent banner. Essential cookies cannot 
              be disabled as they are necessary for the website to function properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Contact and Complaints</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at: 
              contactus@choicemedical.health
            </p>
            <p className="mt-2">
              You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#0A1C33]">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The current version will always be 
              available on this page with the effective date noted below.
            </p>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyPolicy;