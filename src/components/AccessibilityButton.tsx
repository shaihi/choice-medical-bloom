
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Accessibility } from 'lucide-react';
import AccessibilityPanel from "./AccessibilityPanel";

const AccessibilityButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsPanelOpen(true)}
        className="fixed bottom-16 right-4 z-40 h-12 w-12 rounded-full bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] shadow-lg"
        aria-label="Open accessibility settings"
        aria-haspopup="dialog"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      <AccessibilityPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default AccessibilityButton;
