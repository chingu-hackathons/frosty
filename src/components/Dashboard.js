import { useContext } from 'react';
import CalorieContext from '../contexts/CalorieContext';
import Chart from './Chart';
import Input from './Input';
import StartButton from './StartButton';
import Stats from './Stats';

const Dashboard = () => {
  const { calorieData } = useContext(CalorieContext);
  const { start } = calorieData;

  return (
    <div className='flex flex-col items-center w-full py-4'>
      <Chart />
      {!start && <Input />}
      <StartButton />
      {start && <Stats />}
    </div>
  );
};
export default Dashboard;
