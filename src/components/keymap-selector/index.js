import React from 'react';
import { KeymapSelectorElement, SwitchElement } from './styled';

export default function KeymapSelector({ settings, updateSettings }) {
  return (
    <KeymapSelectorElement>
      <p>Full-size layout</p>
      <SwitchElement
        onChange={(value) => {
          updateSettings({
            ...settings,
            keyboardKeymap: value ? 'full' : 'mini',
            isAction: true,
          });
        }}
        checked={settings.keyboardKeymap === 'full'}
        offColor="#575757"
        onColor="#D93636"
        onHandleColor="#ffffff"
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={10}
        width={40}
        className="react-switch"
      />
    </KeymapSelectorElement>
  );
}
