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
import ThemeContext from '../contexts/ThemeContext';

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
  const { theme } = useContext(ThemeContext);

  return (
    <Line
      className='w-full mb-10 px-1 md:px-4'
      datasetIdKey='id'
      data={{
        labels: calorieData.log.map((item, index) => index + 1),
        datasets: [
          {
            id: 1,
            label: 'Calories',
            data: calorieData.log,
            borderColor:
              theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)',
            pointRadius: 2,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            title: {
              display: true,
              text: 'Houses Visited',
              color: theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)',
            },
            ticks: {
              color: theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)',
            },
            grid: {
              color:
                theme === 'dark'
                  ? 'rgba(228, 228, 231, 0.1)'
                  : 'rgba(24, 24, 27, 0.1)',
              borderColor:
                theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)', // <-- this line is answer to initial question
            },
          },
          y: {
            // <-- axis is not array anymore, unlike before in v2.x: '[{'
            ticks: {
              color: theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)',
            },
            grid: {
              color:
                theme === 'dark'
                  ? 'rgba(228, 228, 231, 0.1)'
                  : 'rgba(24, 24, 27, 0.1)',

              borderColor:
                theme === 'dark' ? 'rgb(228 228 231)' : 'rgb(24 24 27)', // <-- this line is answer to initial question
            },
          },
        },
      }}
    />
  );
};
export default Chart;
