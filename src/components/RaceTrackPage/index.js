
import React, { useState, useEffect } from 'react';
import './index.css';

const RaceTrackPage = ({ participants, onRaceFinish }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (elapsedTime > 0 && elapsedTime % 10 === 0) {
      onRaceFinish();
    }
  }, [elapsedTime, onRaceFinish]);

  const calculateParticipantPosition = (participant, index) => {
    const radiusX = 335; // Radius of track1 (670/2)
    const radiusY = 210; // Radius of track1 (420/2)
    const angle = (elapsedTime * participant.speed * Math.PI) / 180;
    const x = 335 + radiusX * Math.cos(angle);
    const y = 210 + radiusY * Math.sin(angle);
    return { x, y };
  };

  return (
    
    <div className='d-flex flex-row justify-content-center pt-5 pr-5'>
      <div className="track-outer mr-5 mt-5">
        <div className="track eclipsetime">Elapsed Time {elapsedTime}</div>
        <p className='elapse'>Track length 400m</p>
        {participants.map((participant, index) => (
          <div key={index} className={`track trackwidth track${index + 1}`}>
            <div
              className="participant"
              style={{
                left: `${calculateParticipantPosition(participant, index).x}px`,
                top: `${calculateParticipantPosition(participant, index).y}px`,
              }}
            >{participant.name}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default RaceTrackPage;
