import { useContext, useState } from 'react';
import CalorieContext from '../contexts/CalorieContext';

const Input = () => {
  const { calorieData, dispatch } = useContext(CalorieContext);
  const [target, setTarget] = useState(calorieData.homeTarget);

  const inputHomeCount = (count) => {
    if (count > 0) {
      dispatch({
        type: 'SET_HOME_TARGET',
        target: count,
      });
    } else setTarget(calorieData.homeTarget);
  };

  return (
    <div className='mb-4'>
      <label htmlFor='input' className='mr-2'>
        Homes to visit:
      </label>
      <input
        className='rounded-full text-center px-2 w-20 bg-zinc-100 dark:bg-zinc-900'
        type='number'
        min={1}
        id='input'
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        onBlur={() => inputHomeCount(target)}
        autoComplete='false'
      />
      <button></button>
    </div>
  );
};
export default Input;
