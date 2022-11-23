import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';

function standingsTable({ data }) {
  return (
    <Table striped bordered hover responsive>
      <TableHead />
      <TableBody data={data} />
    </Table>
  );
}

export default standingsTable;
