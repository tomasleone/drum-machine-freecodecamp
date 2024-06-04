import React, { useState } from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const drumPads = [
  { id: "Heater-1", keyTrigger: "Q", clip: "/audio/Heater-1.mp3", soundName: "Heater 1" },
  { id: "Heater-2", keyTrigger: "W", clip: "/audio/Heater-2.mp3", soundName: "Heater 2" },
  { id: "Heater-3", keyTrigger: "E", clip: "/audio/Heater-3.mp3", soundName: "Heater 3" },
  { id: "Heater-4", keyTrigger: "A", clip: "/audio/Heater-4_1.mp3", soundName: "Heater 4" },
  { id: "Clap", keyTrigger: "S", clip: "/audio/Heater-6.mp3", soundName: "Clap" },
  { id: "Open-HH", keyTrigger: "D", clip: "/audio/Dsc_Oh.mp3", soundName: "Open-HH" },
  { id: "Kick-n-Hat", keyTrigger: "Z", clip: "/audio/Kick_n_Hat.mp3", soundName: "Kick-n-Hat" },
  { id: "Kick", keyTrigger: "X", clip: "/audio/RP4_KICK_1.mp3", soundName: "Kick" },
  { id: "Closed-HH", keyTrigger: "C", clip: "/audio/Cev_H2.mp3", soundName: "Closed-HH" },
];

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');

  const handlePadClick = (soundName) => {
    setDisplayText(soundName);
  };

  return (
    <div id="drum-machine" className="container">
      <Display displayText={displayText} />
      <div className="drum-pads row">
        {drumPads.map((pad) => (
          <div key={pad.id} className="col-4 mb-6 d-flex justify-content-center">
            <DrumPad
              id={pad.id}
              keyTrigger={pad.keyTrigger}
              clip={pad.clip}
              onClick={handlePadClick}
              soundName={pad.soundName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;

