import { Row, Col, Tab, Nav } from 'react-bootstrap';
import Forecast from './Forecast';

function Tabs({ players, activePlayer, setActivePlayer }) {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
      <Row className='mb-3'>
        <Col sm={12}>
          <Nav variant='pills' className='flex-row'>
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
      </Row>
      <Row>
        <Col sm={12}>
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

export default Tabs;
