import React from 'react';
import {
  SliderElement,
  SliderMetaElement,
  ThumbElement,
  TrackElement,
} from './styled';

export default function KeyboardSpeed({ settings, updateSettings }) {
  return (
    <div>
      <SliderMetaElement className="slider-speed__wrapper">
        <p>Speed</p>
        <p>{(settings.keyboardSpeed / 1000).toFixed(2)}</p>
      </SliderMetaElement>
      <SliderElement
        className="slider-speed"
        thumbClassName="slider-speed__thumb"
        trackClassName="slider-speed__track"
        value={settings.keyboardSpeed}
        min={80}
        max={1000}
        onAfterChange={(value) => {
          updateSettings({ ...settings, keyboardSpeed: value, isAction: true });
        }}
        renderTrack={(props, state) => (
          <TrackElement {...props} index={state.index} />
        )}
        renderThumb={(props, state) => (
          <ThumbElement {...props}>{state.valueNow}</ThumbElement>
        )}
      />
    </div>
  );
}
