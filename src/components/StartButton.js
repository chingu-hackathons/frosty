import React, { useContext, useEffect, useRef } from 'react';
import CalorieContext from '../contexts/CalorieContext';
import { IoPlaySharp, IoStopSharp, IoRepeat } from 'react-icons/io5';

const StartButton = () => {
  const { calorieData, dispatch } = useContext(CalorieContext);
  const { calories, homeTarget, homesVisited, start, ended } = calorieData;
  const intervalRef = useRef(null);
  const clear = () => window.clearInterval(intervalRef.current);

  const handleStartStop = () => {
    dispatch({
      type: 'TOGGLE_START_STOP',
    });
  };

  useEffect(() => {
    const visitHomes = (speed) => {
      for (let i = 0; i < speed; i++) {
        let random = Math.floor(Math.random() * speed);
        // if random is a number between 0 and 3, that house gifted tea & carrots
        if (random <= 3) {
          if (calories < 110 || homesVisited === homeTarget) {
            clear();
            dispatch({ type: 'END' });
            break;
          }
          dispatch({ type: 'GIFT_TEA' });
        }
        // if random is a number between 4 and 9, that house gifted milk & cookies
        if (random >= 4 && random <= 9) {
          if (calories < 60 || homesVisited === homeTarget) {
            clear();
            dispatch({ type: 'END' });
            break;
          }
          dispatch({ type: 'GIFT_MILK' });
        }
      }
    };
    if (start) {
      intervalRef.current = window.setInterval(() => {
        if (calories > 0 && homeTarget > homesVisited) {
          // if speed is 10 hps
          if (calories < 5000) {
            visitHomes(10);
          }
          // if speed is 5 hps
          if (calories >= 5000) {
            visitHomes(5);
          }
        }
      }, 1000);
    }
    return clear;
  }, [calories, dispatch, homeTarget, homesVisited, start]);

  useEffect(() => {
    if (ended) {
      clear();
    }
  }, [ended]);

  return (
    <button
      onClick={handleStartStop}
      className='rounded-full py-1 px-2 flex items-center border border-zinc-800 dark:border-zinc-200'
    >
      {calorieData.ended ? (
        <React.Fragment>
          <IoRepeat className='mr-1' />
          <span>Reset</span>
        </React.Fragment>
      ) : calorieData.start ? (
        <React.Fragment>
          <IoStopSharp className='mr-1' />
          <span>Stop</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <IoPlaySharp className='mr-1' />
          <span>Start</span>
        </React.Fragment>
      )}
    </button>
  );
};
export default StartButton;
