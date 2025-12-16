'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function LanguageModal({ isOpen, onClose, onSelectLanguage, activeLangCode }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || typeof window === 'undefined') return null;

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ZT', label: '繁體中文' },
    { code: 'ZH', label: '简体中文' },
    { code: 'TH', label: 'ภาษาไทย' },
    { code: 'RU', label: 'Русский' },
    { code: 'JA', label: '日本語' },
  ];

  const modalContent = (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center transition-opacity">
      <div
        className="bg-white notranslate w-full sm:w-80 rounded-t-3xl sm:rounded-xl p-6 shadow-lg animate-slide-up"
        translate="no"
      >
        <div className="text-center">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h2 className="text-base font-medium text-gray-800 mb-4">Select Language</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {languages.map(({ code, label }) => {
            const isSelected = code === activeLangCode;
            return (
              <button
                key={code}
                className={`w-full py-3 text-sm text-gray-800 text-center cursor-pointer ${
                  isSelected ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'
                }`}
                onClick={() => {
                  onSelectLanguage(code);
                  onClose();
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full py-3 text-sm font-medium text-blue-600 border-t border-gray-200 hover:bg-gray-50 cursor-pointer"
        >
          Cancel
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.getElementById('modal-root'));
}
