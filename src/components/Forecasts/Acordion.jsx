import { Accordion } from 'react-bootstrap';
import Forecast from './Forecast';

function Acordion({ players, activePlayer, setActivePlayer }) {
  return (
    <Accordion flush>
      {players.map((p, i) => {
        return (
          <Accordion.Item eventKey={i} key={p}>
            <Accordion.Header>{p}</Accordion.Header>
            <Accordion.Body>
              <Forecast player={activePlayer || players[0]} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default Acordion;
