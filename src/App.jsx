import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [positions, setPositions] = useState([]);

  const parseResults = () => {
    results.map((match) => {
      if (match.status === 'completed') {
        const homeTeam = match.homeTeam.name;
        const homeTeamGoals = match.homeTeam.goals;
        const awayTeam = match.awayTeam.name;
        const awayTeamGoals = match.awayTeam.goals;

        console.log(homeTeam, homeTeamGoals, awayTeamGoals, awayTeam);
      }
    });
  };

  parseResults();

  const fetchResults = async () => {
    const response = await fetch('https://copa22.medeiro.tech/matches');
    const data = await response.json();
    setResults(data);
  };
  const fetchPositions = async () => {
    const response = await fetch('https://pnkwnu.deta.dev/prode/standings');
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    fetchPositions();
  }, []);

  return <div className='App'></div>;
}

export default App;
