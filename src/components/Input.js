import { useContext, useState } from 'react';
import CalorieContext from '../contexts/CalorieContext';

const Input = () => {
  const { calorieData, dispatch } = useContext(CalorieContext);
  const [target, setTarget] = useState(calorieData.homes.target);

  const inputHomeCount = (count) => {
    if (count > 0) {
      dispatch({
        type: 'SET_HOME_TARGET',
        target: count,
      });
    } else setTarget(calorieData.homes.target);
  };

  return (
    <div>
      <label htmlFor='input'>Homes to visit:</label>
      <input
        className='rounded-full text-center px-2 w-20'
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
