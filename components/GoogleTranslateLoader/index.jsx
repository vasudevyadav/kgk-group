// components/GoogleTranslateLoader.js
'use client';

import { useEffect } from 'react';

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (window.google?.translate?.TranslateElement) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,zh-CN,zh-TW,th,ru,ja',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" style={{ display: 'none' }} />;
}
