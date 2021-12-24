import { useContext } from 'react';
import CalorieContext from '../contexts/CalorieContext';

const StatCard = (props) => {
  const { calorieData } = useContext(CalorieContext);
  const { calories, homeTarget, homesVisited, ended } = calorieData;

  const speed = ended
    ? '0'
    : calories >= 5000
    ? '5'
    : calories < 5000
    ? '10'
    : null;
  const remaining = homeTarget - homesVisited;

  const types = {
    calories: 'Calories',
    speed: 'Houses/Second',
    milk: 'Milk & Cookies ',
    tea: 'Tea & Carrots',
    homesVisited: 'Houses Visited',
    remaining: 'Houses Remaining',
    time: 'Seconds',
  };

  return (
    <div className='flex flex-col items-center p-2 rounded bg-zinc-100 dark:bg-zinc-900 shadow-md dark:shadow-black/30 w-36 m-2'>
      <p>
        <strong>
          {props.type === 'speed'
            ? speed
            : props.type === 'remaining'
            ? remaining
            : props.type === 'time'
            ? calorieData.time.toFixed(1)
            : calorieData[props.type]}
        </strong>
      </p>
      <p className='text-sm'>{types[props.type]}</p>
    </div>
  );
};
export default StatCard;
