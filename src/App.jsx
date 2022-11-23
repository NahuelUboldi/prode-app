import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import StandingsTable from './components/StandingsTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    setData(info);
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchData('https://pnkwnu.deta.dev/prode/standings');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log({ loading, data, error });
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <div className='App'>
        <Container>
          <Row>
            <Col>
              <StandingsTable data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
