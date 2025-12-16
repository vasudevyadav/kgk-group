'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import the script and initialize
export default function GoogleTranslateWrapper() {
  useEffect(() => {
    // Add script tag for Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,zh-CN,zh-TW,ja,ru,th',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
