import './App.css';
import React, { useState } from 'react';
import WavesurferComponent from './components/WavesurferComponent';
import Canvas from './components/Canvas';
// import image from './assets/page.jpg';

function App() {
  const [startTime, setStartTime] = useState(0);
  const [startTimeChanged, setStartTimeChanged] = useState(0);

  const playMusicAtTime = (startTime) => {
    console.log('called playMusicAtTime');
    setStartTime(startTime);
    setStartTimeChanged((prev) => prev + 1);
  };

  return (
    <div className="App">
      <WavesurferComponent
        startTime={startTime}
        startTimeChange={startTimeChanged}
      />
      <Canvas
        id="canvas"
        image="./../assets/page.jpg"
        width="760"
        height="900"
        onRectClick={playMusicAtTime}
      />
    </div>
  );
}

export default App;
