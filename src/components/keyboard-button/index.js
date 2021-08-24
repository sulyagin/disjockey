import React from 'react';
import { ButtonElement } from './styled';

export default function KeyboardButton({ selected, keycode }) {
  return (
    <ButtonElement
      className={['keyboard__button', selected ? 'selected' : ''].join(' ')}
      aria-label={keycode}
    >
      {keycode}
    </ButtonElement>
  );
}
