import TodayMatches from './TodayMatches';
function Matches(todayMatches) {
  console.log(todayMatches);
  return (
    <>
      <TodayMatches data={todayMatches} />
    </>
  );
}

export default Matches;
