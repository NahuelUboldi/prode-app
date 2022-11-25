import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function Forecast(data) {
  const [forecast, setForecast] = useState([]);
  const GROUP_LIST = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  useEffect(() => {
    if (data.player) {
      fetch(`https://pnkwnu.deta.dev/prode/player/${data.player}`)
        .then((r) => r.json())
        .then((r) => {
          setForecast(r.forecasts);
        });
    }
  }, []);

  return (
    <>
      {forecast[1] ? (
        <>
          {GROUP_LIST.map((group) => {
            return (
              <ListGroup key={group}>
                <ListGroup.Item
                  variant='primary'
                  className='text-center fw-bolder'
                >
                  Grupo {group}
                </ListGroup.Item>
                {Object.keys(forecast)
                  .filter((k) => {
                    return forecast[k].group === group;
                  })
                  .map((k) => {
                    return (
                      <ListGroup.Item
                        key={forecast[k].id}
                        className='text-center'
                      >
                        {forecast[k].local}{' '}
                        <strong>{forecast[k].local_score}</strong> -{' '}
                        <strong>{forecast[k].visit_score}</strong>{' '}
                        {forecast[k].visit}{' '}
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Forecast;
