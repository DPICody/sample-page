import React, { useEffect, useState } from 'react';
import Wavesurfer from 'react-wavesurfer.js';
import file from './../assets/music.mp3';

const WavesurferComponent = ({ startTime, startTimeChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonText, setButtonText] = useState('Play');
  const [pos, setPos] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    if (startTime == pos) {
      startTime = startTime + 0.001; // workaround for glitch that prevents playing
    }
    setPos(startTime);
    if (startTimeChange > 0) setIsPlaying(true);
  }, [startTimeChange]);

  useEffect(() => {
    isPlaying ? setButtonText('Pause') : setButtonText('Play');
  }, [isPlaying]);

  const togglePlayPause = () => {
    // waveSurfer.playPause();
    setIsPlaying((prev) => !prev);
  };

  const onReadyHandler = () => console.log('done loading!');

  return (
    <div>
      <Wavesurfer
        src={require('./../assets/music.mp3').default}
        pos={pos}
        // onPositionChange={handlePosChange}
        onReady={onReadyHandler}
        playing={isPlaying}
        muted={false}
      />
      <button
        onClick={() => {
          togglePlayPause();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default WavesurferComponent;
