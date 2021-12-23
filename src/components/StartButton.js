import React, { useContext } from 'react';
import CalorieContext from '../contexts/CalorieContext';
import { IoPlaySharp, IoStopSharp } from 'react-icons/io5';

const StartButton = () => {
  const { calorieData, dispatch } = useContext(CalorieContext);

  const handleStartStop = () => {
    dispatch({
      type: 'TOGGLE_START_STOP',
    });
  };

  return (
    <button
      onClick={handleStartStop}
      className='rounded-full py-1 px-2 flex items-center border border-zinc-800 dark:border-zinc-200'
    >
      {calorieData.start ? (
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
