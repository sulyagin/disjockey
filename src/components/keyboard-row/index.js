import React from 'react';
import KeyboardButton from '../keyboard-button/index';
import { RowElement } from './styled';

export default function KeyboardRow({
  index, rowIndex, row, buttonIndex,
}) {
  return (
    <RowElement className={index === rowIndex ? 'selected' : ''}>
      {row.buttons.map((button, i) => (
        <KeyboardButton
          key={i}
          selected={i === buttonIndex && index === rowIndex ? 'selected' : ''}
          keycode={button.keycode}
        />
      ))}
    </RowElement>
  );
}
