import React from 'react';
import { KeyboardFieldElement } from './styled';

export default function KeyboardField({ value }) {
  return (
    <KeyboardFieldElement
      className="keyboard__input"
      dangerouslySetInnerHTML={{
        __html: value || 'your text will appear here',
      }}
    />
  );
}
