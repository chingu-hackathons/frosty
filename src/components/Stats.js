import StatCard from './StatCard';

const Stats = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      <StatCard type='calories' />
      <StatCard type='speed' />
      <StatCard type='remaining' />
      <StatCard type='homesVisited' />
      <StatCard type='milk' />
      <StatCard type='tea' />
    </div>
  );
};
export default Stats;
