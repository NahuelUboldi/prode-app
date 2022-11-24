import TodayMatches from './TodayMatches';
import { Col, Row } from 'react-bootstrap';
function Matches(todayMatches) {
  return (
    <Row>
      <Col>
        <TodayMatches data={todayMatches} />
      </Col>
    </Row>
  );
}

export default Matches;
