import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import Player from './Player';

function standingsTable({ data }) {
  return (
    <Table striped bordered hover>
      <TableHead />
      <TableBody data={data} />
    </Table>
  );
}

export default standingsTable;
