import React, { useRef, useState, useEffect } from 'react';
import ResultModal from './ResultModal';

function Timer({ title, targettime }) {
  const [timeRemaining, setTimeRemaining] = useState(targettime * 1000);
  const timer = useRef();
  const dialog = useRef();

  useEffect(() => {
    if (timeRemaining <= 0 && timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      dialog.current.open();
    }
  }, [timeRemaining]);

  function handleReset() {
    setTimeRemaining(targettime * 1000);
  }

  const timerActive = timeRemaining > 0 && timeRemaining < targettime * 1000;

  function handleStart() {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 10);
      }, 10);
    }
  }

  function handleStop() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      dialog.current.open();
    }
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targettime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targettime} second{targettime !== 1 ? 's' : ''}
        </p>
        <button onClick={timerActive ? handleStop : handleStart}>
          {timerActive ? 'stop' : 'start'} challenge
        </button>

        <p className={timerActive ? 'active' : ''}>
          {timerActive ? 'time is running...' : 'timer is inactive'}
        </p>
      </section>
    </>
  );
}

export default Timer;
