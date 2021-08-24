import React, { useState, useEffect } from 'react';

import Header from './components/header/index';
import FooterHelp from './components/footer-help/index';
import Keyboard from './components/keyboard/index';
import KeyboardSpeed from './components/keyboard-speed';
import KeymapSelector from './components/keymap-selector';

import 'typeface-roboto';
import 'normalize.css';

import { GlobalStyle } from './styled-global';
import { AppElement, FooterElement, FooterSettingsElement } from './styled';

export default function App() {
  const [settings, setSettings] = useState({
    keyboardKeymap: localStorage.getItem('keyboardKeymap') || 'mini',
    keyboardSpeed: parseInt(localStorage.getItem('keyboardSpeed'), 10) || 500,
    isAction: false,
  });

  const updateSettings = (newSettings) => setSettings(newSettings);

  useEffect(() => {
    localStorage.setItem('keyboardSpeed', settings.keyboardSpeed.toString());
    localStorage.setItem('keyboardKeymap', settings.keyboardKeymap);
    if (settings.isAction) {
      document.body.classList.add('is-action');
      setTimeout(() => {
        updateSettings({ ...settings, isAction: false });
        document.body.classList.remove('is-action');
      }, 50);
    }
  }, [settings]);

  return (
    <AppElement>
      <GlobalStyle />
      <Header />
      <Keyboard settings={settings} updateSettings={updateSettings} />
      <FooterElement>
        <FooterHelp />
        <FooterSettingsElement>
          <KeyboardSpeed settings={settings} updateSettings={updateSettings} />
          <KeymapSelector settings={settings} updateSettings={updateSettings} />
        </FooterSettingsElement>
      </FooterElement>
    </AppElement>
  );
}
