import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <Card className="p-4 bg-white shadow-lg border">
        <div className="space-y-3">
          <h3 className="font-semibold text-[#0A1C33]">Cookie Consent</h3>
          <p className="text-sm text-gray-600">
            We use essential cookies to ensure our website functions properly. We do not use tracking cookies or analytics that collect personal data.
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Button 
              onClick={acceptCookies}
              className="flex-1 bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-white"
            >
              Accept Essential
            </Button>
            <Button 
              onClick={rejectCookies}
              variant="outline"
              className="flex-1"
            >
              Reject All
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            <a href="#privacy" className="underline hover:text-[#1CC5DC]">
              Read our Privacy Policy
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;