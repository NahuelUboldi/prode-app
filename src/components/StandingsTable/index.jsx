import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { Col, Row } from 'react-bootstrap';

function standingsTable({ data }) {
  return (
    <Row>
      <Col>
        <h2>Tabla de posiciones</h2>
        <Table striped bordered hover responsive>
          <TableHead />
          <TableBody data={data} />
        </Table>
      </Col>
    </Row>
  );
}

export default standingsTable;
