import React, { useState, useEffect } from 'react';
import KeyboardField from '../keyboard-input/index';
import KeyboardRow from '../keyboard-row/index';
import { keymapMini, keymapFull } from './keymaps';
import { KeyboardElement } from './styled';

export default function Keyboard({ settings, updateSettings }) {
  const [keymap, setKeymap] = useState(
    localStorage.getItem('keyboardKeymap') === 'full' ? keymapFull : keymapMini,
  );
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('keyboardInputValue') || '',
  );
  const [rowIndex, setRowIndex] = useState(0);
  const [buttonIndex, setButtonIndex] = useState(0);

  const changeRowDown = () => {
    const nextPosition = (rowIndex !== keymap.length - 1) ? rowIndex + 1 : 0;
    setRowIndex(nextPosition);
    setButtonIndex(0);
  };
  const changeRowUp = () => {
    const nextPosition = (rowIndex !== 0) ? rowIndex - 1 : keymap.length - 1;
    setRowIndex(nextPosition);
    setButtonIndex(keymap[nextPosition].buttons.length - 1);
  };
  const changeButtonRight = () => (buttonIndex !== keymap[rowIndex].buttons.length - 1
    ? setButtonIndex(buttonIndex + 1)
    : changeRowDown());
  const changeButtonLeft = () => (buttonIndex !== 0
    ? setButtonIndex(buttonIndex - 1)
    : changeRowUp());
  const onSpaceButton = () => setInputValue(`${inputValue} `);
  const onBackspaceButton = () => setInputValue(inputValue.slice(0, -1) || '');
  const onCopyButton = () => navigator.clipboard.writeText(inputValue);
  const onClearButton = () => setInputValue('');
  const onCurrentButton = () => setInputValue(inputValue + keymap[rowIndex].buttons[buttonIndex].keycode);
  const selectButton = () => {
    const currentKey = keymap[rowIndex].buttons[buttonIndex].keycode;
    updateSettings({ ...settings, isAction: true });
    switch (currentKey) {
      case 'space':
        return onSpaceButton();
      case 'backspace':
        return onBackspaceButton();
      case 'copy':
        return onCopyButton();
      case 'clear':
        return onClearButton();
      default:
        return onCurrentButton();
    }
  };
  const onMouseClick = (event) => {
    if (event.target.classList.contains('keyboard__input')) return navigator.clipboard.writeText(inputValue);

    event.preventDefault();
    switch (event.which) {
      case 1:
        return selectButton();
      case 2:
        return setInputValue(`${inputValue} `);
      case 3:
        return setInputValue(inputValue.slice(0, -1));
      default:
        return false;
    }
  };
  const onKeypress = (event) => {
    event.preventDefault();
    switch (event.code) {
      case 'ArrowRight':
        return changeButtonRight();
      case 'ArrowLeft':
        return changeButtonLeft();
      case 'Space':
        return selectButton();
      case 'Backspace':
        return onBackspaceButton();
      default:
        return false;
    }
  };

  useEffect(() => {
    updateSettings({ ...settings, isAction: true });
    localStorage.setItem('keyboardInputValue', inputValue);
  }, [inputValue]);

  useEffect(() => {
    document
      .getElementsByClassName('keyboard')[0]
      .addEventListener('mousedown', onMouseClick);
    document
      .addEventListener('keydown', onKeypress);
    return () => {
      document
        .getElementsByClassName('keyboard')[0]
        .removeEventListener('mousedown', onMouseClick);
      document
        .removeEventListener('keydown', onKeypress);
    };
  }, [buttonIndex, rowIndex, inputValue]);

  useEffect(() => {
    setButtonIndex(0);
    setRowIndex(0);
  }, [keymap]);

  useEffect(() => {
    setKeymap(
      settings.keyboardKeymap === 'mini' ? keymapMini : keymapFull,
    );
    const interval = setTimeout(
      () => changeButtonRight(),
      settings.keyboardSpeed,
    );
    return () => clearTimeout(interval);
  });

  return (
    <div className="keyboard" onContextMenu={(event) => event.preventDefault()}>
      <KeyboardField value={inputValue} />
      <KeyboardElement>
        {keymap.map((row, i) => (
          <KeyboardRow
            key={i}
            index={i}
            row={row}
            rowIndex={rowIndex}
            buttonIndex={buttonIndex}
          />
        ))}
      </KeyboardElement>
    </div>
  );
}
