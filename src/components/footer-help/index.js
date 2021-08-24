import React from 'react';
import { FooterHelpElement } from './styled';

export default function FooterHelp() {
  return (
    <FooterHelpElement>
      <p>
        <span>Left Click</span>
        on the mouse puts the selected symbol
      </p>
      <p>
        <span>Right Click</span>
        on the mouse deletes the last symbol
      </p>
      <p>
        <span>Middle Click</span>
        on the mouse puts a spacebar
      </p>
      <p>To copy the text, click on it or on the copy button</p>
    </FooterHelpElement>
  );
}
