import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetchData';

function Forecast(player) {
  const [forecast, setForecast] = useState([]);
  console.log(player.player);
  useEffect(() => {
    if (player) {
      fetchData(`https://pnkwnu.deta.dev/prode/player/${player.player}`).then(
        (r) => {
          setForecast(r);
        }
      );
    }
  }, []);
  console.log({ forecast });
  return <div>Forecast</div>;
}

export default Forecast;
