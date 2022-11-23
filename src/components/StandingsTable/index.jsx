import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';

function standingsTable({ data }) {
  return (
    <>
      <h2>Tabla de posiciones</h2>
      <Table striped bordered hover responsive>
        <TableHead />
        <TableBody data={data} />
      </Table>
    </>
  );
}

export default standingsTable;
