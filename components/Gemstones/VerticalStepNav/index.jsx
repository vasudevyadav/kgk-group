'use client';

import { useEffect, useState } from 'react';

const steps = [
  { label: 'Precious', id: 'precious' },
  { label: 'SemiPrecious', id: 'semi-precious' },
  { label: 'SourcingWorld', id: 'sourcing-world' },
  { label: 'GemstoneManufacturing', id: 'gemstone-manufacturing' },
  { label: 'Distribution', id: 'distribution-map' },
];

export default function VerticalStepNav() {
  const [activeStep, setActiveStep] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const scrollToSection = (id, index) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveStep(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const scrollPos = window.scrollY || window.pageYOffset;
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? scrollPos / scrollableHeight : 0;

      const trackHeight = 64;
      const thumbHeight = 12;
      const maxThumbOffset = trackHeight - thumbHeight;
      setThumbTop(progress * maxThumbOffset);

      let currentStep = 0;
      for (let i = 0; i < steps.length; i++) {
        const section = document.getElementById(steps[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.3) {
            currentStep = i;
          }
        }
      }
      setActiveStep(currentStep);

      const firstElem = document.getElementById(steps[0].id);
      const lastElem = document.getElementById(steps[steps.length - 1].id);
      const firstTop = firstElem?.getBoundingClientRect().top ?? Infinity;
      const lastTop = lastElem?.getBoundingClientRect().top ?? -Infinity;

      console.log('First Top:', firstTop, 'Last Top:', lastTop);

      const inView = firstTop - 200 <= 0 && lastTop + 200 >= 0;
      const beyondThreshold = scrollPos > 200;

      setShowNav(inView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showNav) return null;

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Scrollbar Track */}
        <div className="relative w-[6px] h-16 bg-[#8c6b4d] rounded-full overflow-hidden">
          <div
            className="absolute w-[6px] h-3 bg-white rounded-full left-0 transition-all duration-200"
            style={{ top: `${thumbTop}px` }}
          />
        </div>

        {/* Step Dots */}
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => scrollToSection(step.id, index)}
            className="flex items-center gap-2 focus:outline-none group"
            aria-label={`Go to ${step.label}`}
          >
            <span
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                activeStep === index
                  ? 'bg-[#8c6b4d] border-[#8c6b4d]'
                  : 'border-[#8c6b4d]'
              }`}
            ></span>
            {activeStep === index && (
              <span className="text-[#8c6b4d] font-cardo text-sm">
                {step.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
