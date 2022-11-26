import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData';
import Acordion from './Acordion';
import './style.css';
import Tabs from './Tabs';

function Forecasts() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState('');
  useEffect(() => {
    fetchData('https://pnkwnu.deta.dev/prode/players').then((r) => {
      setPlayers(r);
    });
  }, []);

  console.log('activePlayer: ', activePlayer);

  return (
    <div className='mb-5'>
      <h2 className='section-title'>
        Pronosticos individuales de cada participante
      </h2>
      <p>Hacé click en el participante que quieras consultar.</p>
      {/* <Acordion
        players={players}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      /> */}
      <Tabs
        players={players}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />
    </div>
  );
}

export default Forecasts;
