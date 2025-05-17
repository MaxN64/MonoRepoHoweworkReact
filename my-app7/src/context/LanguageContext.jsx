import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({
  lang: 'en',
  toggleLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};