import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
//Bootstrap
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
//Components
import StandingsTable from './components/StandingsTable';
import Matches from './components/Matches';
import Header from './components/Header';
import Forecasts from './components/Forecasts';
//helpers

function App() {
  const [loadingStandings, setLoadingStandings] = useState(true);
  const [loadingMatches, setLoadingMatches] = useState(true);
  const [standings, setStandings] = useState([]);
  // const [todayMatches, setTodayMatches] = useState([]);
  const [error, setError] = useState(null);

  const fetchStandings = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    setStandings(info);
  };
  // const fetchTodayMatches = async (url) => {
  //   const response = await fetch(url);
  //   const info = await response.json();
  //   setTodayMatches(info);
  // };

  // const parseTodayMatches = () => {
  //   //scheduled, in_progress, completed

  //   todayMatches.map((match) => {
  //     const homeTeam = match.homeTeam.name;
  //     const awayTeam = match.awayTeam.name;
  //     let homeTeamGoals = match.homeTeam.goals;
  //     let awayTeamGoals = match.awayTeam.goals;

  //     if (match.status === 'scheduled') {
  //       homeTeamGoals = '-';
  //       awayTeamGoals = '-';
  //     }
  //   });
  // };
  // parseTodayMatches();

  useEffect(() => {
    try {
      fetchStandings('https://pnkwnu.deta.dev/prode/standings', {
        mode: 'no-cors',
        header: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoadingStandings(false);
    }
  }, []);
  // useEffect(() => {
  //   try {
  //     setLoadingMatches(true);
  //     fetchTodayMatches('https://copa22.medeiro.tech/matches/today');
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //   } finally {
  //     setLoadingMatches(false);
  //   }
  // }, []);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <div className='App'>
        <Container>
          {/* <Header /> */}
          {/* <Matches todayMatches={todayMatches} /> */}
          <StandingsTable data={standings} />
          <Forecasts />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
