
import React, { useState, useEffect } from 'react';
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { X, Type, Eye, RotateCcw } from "lucide-react";

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityPanel = ({ isOpen, onClose }: AccessibilityPanelProps) => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply reduced motion
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [reduceMotion]);

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setReduceMotion(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#0A1C33]">Accessibility Settings</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close accessibility panel"
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {/* Font Size */}
          <div className="space-y-2">
            <Label htmlFor="font-size-slider" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Font Size: {fontSize}%
            </Label>
            <Slider
              id="font-size-slider"
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              min={100}
              max={200}
              step={10}
              className="w-full"
              aria-label="Adjust font size"
            />
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast-switch" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              High Contrast
            </Label>
            <Switch
              id="high-contrast-switch"
              checked={highContrast}
              onCheckedChange={setHighContrast}
              aria-label="Toggle high contrast mode"
            />
          </div>

          {/* Reduce Motion */}
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion-switch" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reduce Motion
            </Label>
            <Switch
              id="reduce-motion-switch"
              checked={reduceMotion}
              onCheckedChange={setReduceMotion}
              aria-label="Toggle reduced motion"
            />
          </div>
        </div>

        <Button
          onClick={resetSettings}
          variant="outline"
          className="w-full"
        >
          Reset to Default
        </Button>
      </Card>
    </div>
  );
};

export default AccessibilityPanel;
