import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData';
import Forecast from './Forecast';

function Forecasts() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState('');
  useEffect(() => {
    fetchData('https://pnkwnu.deta.dev/prode/players').then((r) => {
      setPlayers(r);
    });
  }, []);

  https: return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
      <Row>
        <Col sm={3}>
          <Nav variant='pills' className='flex-column'>
            {players.map((p) => {
              return (
                <Nav.Item key={p}>
                  <Nav.Link eventKey={p} onClick={() => setActivePlayer(p)}>
                    {p}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content key={activePlayer || players[0]}>
            <Tab.Pane eventKey={activePlayer || players[0]}>
              <Forecast player={activePlayer || players[0]} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Forecasts;
