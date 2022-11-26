import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import Loading from '../Loading';

import { Col, Row } from 'react-bootstrap';

function standingsTable({ data }) {
  const [standings, setStandings] = useState([]);

  const fetchStandings = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    setStandings(info);
  };

  useEffect(() => {
    try {
      fetchStandings('https://pnkwnu.deta.dev/prode/standings');
    } catch (error) {
      console.log('Ha habido un error: ', error);
    }
  }, []);
  console.log('standings: ', standings);
  console.log('standings-error: ', standings.error);

  return (
    <Row>
      <Col>
        <h2 className='section-title'>Tabla de posiciones</h2>
        {standings.length ? (
          <Table striped bordered hover responsive>
            <TableHead />
            <TableBody data={standings} />
          </Table>
        ) : (
          <Loading
            status={standings.error ? 'broken' : 'loading'}
            fetchStandings={fetchStandings}
          />
        )}
      </Col>
    </Row>
  );
}

export default standingsTable;
