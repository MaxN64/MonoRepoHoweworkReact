import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import TextDisplay from './components/TextDisplay';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;