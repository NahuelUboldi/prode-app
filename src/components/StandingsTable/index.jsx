import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
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
      fetchStandings('https://pnkwnu.deta.dev/prode/standings', {
        mode: 'no-cors',
        header: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }, []);
  console.log(standings);
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
          <p>Loading...</p>
        )}
      </Col>
    </Row>
  );
}

export default standingsTable;
