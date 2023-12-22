import React, { useState } from 'react';
import RaceTrackPage from '../RaceTrackPage';
import RaceResultsPopup from '../RaceResultsPopup';
import './index.css';

const FirstPage = () => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [time, setTime] = useState('');
  const [isRaceStarted, setIsRaceStarted] = useState(false);
  const [showResultsPopup, setShowResultsPopup] = useState(false);

  

  const addParticipant = () => {
    if (participants.length < 10 && name && speed && time) {
      setParticipants([...participants, { name, speed, time }]);
      setName('');
      setSpeed('');
      setTime('');
    } else {
      alert('Maximum participants reached or missing information');
    }
  };

  const startRace = () => {
    setIsRaceStarted(true);
  };

  const finishRace = () => {
    setShowResultsPopup(true);
  };

  const handleBackToHome = () => {
    setShowResultsPopup(false);
  };

  return (
    <div className='containercolor'>
      <div>
        {isRaceStarted ? (
          <RaceTrackPage participants={participants} onRaceFinish={finishRace}/>
        ) : (
                        <div className='d-flex flex-row justify-content-center pt-5 p-5'>
                          <div className='width1 p-4'>
                          <div>
                            <h3>RUNNER DETAILS</h3>
                            <p className=''>*You can add max 10 participants</p>
                          </div>

  
                          <div>
                                <label htmlFor="name" className='d-flex justify-content-start'>Name</label>
                                <input type="text" id="name" className="form-control" aria-describedby="passwordHelpBlock"  value={name}
                                onChange={(e) => setName(e.target.value)}/>
                          </div>
                          <div>
                                    <label htmlFor="speed" className='d-flex justify-content-start'>Speed</label>
                                    <input type="number" id="speed" className="form-control" aria-describedby="passwordHelpBlock"  value={speed}
                                    onChange={(e) => setSpeed(e.target.value)}/>
                          </div>
                          <div>
                                    <label htmlFor="time" className='d-flex justify-content-start'>Start Time</label>
                                    <input type="time" id="time" className="form-control" aria-describedby="passwordHelpBlock"  value={time}
                                    onChange={(e) => setTime(e.target.value)}/>
                          </div>
                          <div className='d-flex flex-start mt-2'>
                            <button onClick={addParticipant} className='p-1 bg-dark text-white'>
                              + ADD RUNNER
                            </button>
                          </div>
                          
                          </div>
                          <div className='ml-5 width2 d-flex flex-column justify-content-start bg-white p-5'>
                              <div className='d-flex justify-content-start ml-5'>
                                  <h3 className='ml-5'>LIST OF PARTICIPANTS</h3>
                              </div>
                              <div>
                                  <table className=''>
                                      <tr className='text-start'>
                                          <th className=''>Name</th>
                                          <th className=''>Speed KM/H</th>
                                          <th className=''>Start Time</th>
                                          <th className=''>End Time</th>
                                      </tr>
                                        {participants.map((participant, index) => (
                                          <tr key={index}>
                                          <td>{participant.name}</td>
                                          <td>{participant.speed} KM/H</td>
                                          <td>-</td>
                                          <td>-</td>
                                        </tr>
                                          
                                        ))}
                                  </table>                       
                              </div>
                              <div className='d-flex justify-content-end m-5'>
                            <button className='parallelogram-btn' onClick={startRace}>
                              Start Race
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-arrow-right ml-2'
                                viewBox='0 0 16 16'
                              >
                                <path fill-rule='evenodd' d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8' />
                              </svg>
                            </button>
                              </div>
                          </div>
                        </div>
        )}
        {showResultsPopup && <RaceResultsPopup participants={participants} onBackToHome={() => setShowResultsPopup(false)} onRestartRace={() => {
      // Handle the restart race logic here
      setShowResultsPopup(false); // Close the results popup if needed
      // Additional logic for restarting the race...
    }}/>}
      </div>
    </div>
  );
};

export default FirstPage;

