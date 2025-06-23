
import React, { useState } from 'react';
import { Button } from "./ui/button";
import AccessibilityPanel from "./AccessibilityPanel";

const AccessibilityButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsPanelOpen(true)}
        className="fixed bottom-4 right-4 z-40 h-12 w-12 rounded-full bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] shadow-lg"
        aria-label="Open accessibility settings"
        aria-haspopup="dialog"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 0 2h-1a7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-4 0c0-.74.4-1.39 1-1.73V23H9a7 7 0 0 1-7-7H1a1 1 0 0 1 0-2h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM9 9a5 5 0 0 0-5 5 5 5 0 0 0 5 5h6a5 5 0 0 0 5-5 5 5 0 0 0-5-5H9zm-1 3a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1z"/>
        </svg>
      </Button>

      <AccessibilityPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default AccessibilityButton;
