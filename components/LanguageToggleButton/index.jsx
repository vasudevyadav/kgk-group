'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageModal from '@/components/LanguageModal';

const langMap = {
  EN: 'en',
  ZH: 'zh-CN',
  ZT: 'zh-TW',
  TH: 'th',
  RU: 'ru',
  JA: 'ja',
};

const languageNames = {
  EN: 'English',
  ZH: 'Chinese (Simplified)',
  ZT: 'Chinese (Traditional)',
  TH: 'Thai',
  RU: 'Russian',
  JA: 'Japanese',
};

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getLangCodeFromCookie() {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  if (match && match[1]) {
    const code = match[1];
    const key = Object.keys(langMap).find((k) => langMap[k] === code);
    return key || 'EN';
  }
  return 'EN';
}

export default function LanguageToggleButton() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [langCode, setLangCode] = useState('EN');

  useEffect(() => {
    setLangCode(getLangCodeFromCookie());
  }, [pathname]);

  const changeLanguage = (targetCode) => {
    const googleLangCode = langMap[targetCode];
    if (!googleLangCode) return;

    setCookie('googtrans', `/en/${googleLangCode}`);
    localStorage.setItem('googtrans', `/en/${googleLangCode}`);
    location.reload();
  };

  return (
    <>
      <button
        className="font-cardo text-[12.5px] tracking-widest border border-white px-3.5 py-1.5 hover:bg-white hover:text-black transition-colors"
        onClick={() => setModalOpen(true)}
      >
        {languageNames[langCode] || 'English'}
      </button>
      <LanguageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectLanguage={changeLanguage}
      />
    </>
  );
}
