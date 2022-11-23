import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
//Bootstrap
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Components
import StandingsTable from './components/StandingsTable';
import Matches from './components/Matches';

function App() {
  // const [results, setResults] = useState([]);
  // const [standings, setStandings] = useState([]);

  // const parseResults = () => {
  //   results.map((match) => {
  //     if (match.status === 'completed') {
  //       const homeTeam = match.homeTeam.name;
  //       const homeTeamGoals = match.homeTeam.goals;
  //       const awayTeam = match.awayTeam.name;
  //       const awayTeamGoals = match.awayTeam.goals;

  //       console.log(homeTeam, homeTeamGoals, awayTeamGoals, awayTeam);
  //     }
  //   });
  // };

  // parseResults();

  // const fetchResults = async () => {
  //   const response = await fetch('https://copa22.medeiro.tech/matches');
  //   const data = await response.json();
  //   setResults(data);
  // };
  // const fetchStandings = async () => {
  //   const response = await fetch('https://pnkwnu.deta.dev/prode/standings');
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchResults();
  // }, []);

  // useEffect(() => {
  //   fetchStandings();
  // }, []);

  const [loading, setLoading] = useState(false);
  const [standings, setStandings] = useState([]);
  const [todayMatches, setTodayMatches] = useState([]);
  const [error, setError] = useState(null);

  const fetchStandings = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    setStandings(info);
  };
  const fetchTodayMatches = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    setTodayMatches(info);
  };

  const parseTodayMatches = () => {
    //scheduled, in_progress, completed

    todayMatches.map((match) => {
      const homeTeam = match.homeTeam.name;
      const awayTeam = match.awayTeam.name;
      let homeTeamGoals = match.homeTeam.goals;
      let awayTeamGoals = match.awayTeam.goals;

      if (match.status === 'scheduled') {
        homeTeamGoals = '-';
        awayTeamGoals = '-';
      }
    });
  };
  parseTodayMatches();

  useEffect(() => {
    try {
      setLoading(true);
      fetchStandings('https://pnkwnu.deta.dev/prode/standings');
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    try {
      setLoading(true);
      fetchTodayMatches('https://copa22.medeiro.tech/matches/today');
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <div className='App'>
        <Container>
          <Row>
            <Col>
              <Matches todayMatches={todayMatches} />
            </Col>
          </Row>
          <Row>
            <Col>
              <StandingsTable data={standings} />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
