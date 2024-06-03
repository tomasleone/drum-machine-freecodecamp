import React, { useRef, useEffect, useCallback } from 'react';

const DrumPad = ({ id, keyTrigger, clip, onClick, soundName }) => {
  const audioRef = useRef(null);

  const handleClick = useCallback(() => {
    audioRef.current.play();
    onClick(soundName);
  }, [onClick, soundName]);

  const handleKeyPress = useCallback((event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      handleClick();
    }
  }, [keyTrigger, handleClick]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="drum-pad btn btn-primary" id={id} onClick={handleClick}>
      {keyTrigger}
      <audio ref={audioRef} className="clip" src={clip} id={keyTrigger}></audio>
    </div>
  );
};

export default DrumPad;



