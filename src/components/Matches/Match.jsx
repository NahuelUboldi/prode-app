import Card from 'react-bootstrap/Card';

// <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>

function Match(data) {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, matchStatus } =
    data;
  console.log({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    matchStatus,
  });
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <div className='home-team'>
          Argentina <span>1</span>
        </div>
        <div className='home-team'>
          Arabia Saudita <span>2</span>
        </div>
        <div className='match-status'>Scheluded</div>
      </Card.Body>
    </Card>
  );
}

export default Match;
