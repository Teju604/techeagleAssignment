


import React, { useState, useEffect } from 'react';
import './index.css';

const RaceResultsPopup = ({ participants, onBackToHome, onRestartRace }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [sortedParticipants, setSortedParticipants] = useState([]);

  useEffect(() => {
    // Calculate start time when the component mounts
    const currentDate = new Date();
    setStartTime(currentDate.toLocaleTimeString());
  }, []);

  useEffect(() => {
    // Calculate end time when participants change
    const currentDate = new Date();
    setEndTime(currentDate.toLocaleTimeString());
  }, [participants]);

  useEffect(() => {
    // Sort participants by completion time
    const sorted = participants.slice().sort((a, b) => a.time.localeCompare(b.time));
    setSortedParticipants(sorted);
  }, [participants]);

  const handleBackToHome = () => {
    onBackToHome();
  };

  const handleRestartRace = () => {
    // Reset times and positions when restarting
    setStartTime('');
    setEndTime('');
    onRestartRace();
  };

  return (
    <div className="popup bg-white p-5">
      <h2>SCORE BOARD</h2>
      <table className="">
        <thead>
          <tr className="text-start">
            <th className="">Position</th>
            <th className="">Name</th>
            <th className="">Speed</th>
            <th className="">Start Time</th>
            <th className="">End Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedParticipants.map((participant, index) => (
            <tr key={index} className="">
              <td className='text-start ml-3'>
                {index + 1 === 1 ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award text-warning" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                     </svg> {index + 1}st 
                  </>
                ) : index + 1 === 2 ? (
                  <>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-0-circle" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                      </svg></span>{index + 1}nd 
                  </>
                ) : index + 1 === 3 ? (
                  <>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-0-circle" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                      </svg></span>{index + 1}rd <span style={{ color: 'white' }}>●</span>
                  </>
                ) : (
                  ` ${index + 1}th`
                )}
              </td>
              <td>{participant.name}</td>
              <td>{participant.speed} KM/H</td>
              <td>{startTime}</td>
              <td>{endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center m-3">
        <button onClick={handleBackToHome} className="bordernone mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            ></path>
          </svg>{' '}
          Back to Home
        </button>
        <button onClick={handleRestartRace} className="parallelogram-btn">
          Restart Race{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RaceResultsPopup;