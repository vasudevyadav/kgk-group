'use client';

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,zh-CN,zh-TW,ja,ru,th',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    if (!window.google?.translate) {
      addScript();
    }
  }, []);

  return (
    <div id="google_translate_element" className="translate-box"></div>
  );
}
