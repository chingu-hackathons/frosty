import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import CalorieContext from '../contexts/CalorieContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { calorieReducer } from '../reducers/calorieReducer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { calorieData } = useContext(CalorieContext);

  return (
    <Line
      className='mt-12'
      datasetIdKey='id'
      data={{
        labels: calorieData.log.map((item, index) => index + 1),
        datasets: [
          {
            id: 1,
            label: 'Calories',
            data: calorieData.log,
          },
        ],
      }}
    />
  );
};
export default Chart;
