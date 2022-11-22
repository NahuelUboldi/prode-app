import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   fetch('https://pnkwnu.deta.dev/prode/standings', {
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const fetchPositions = () => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const yourUrl = 'pnkwnu.deta.dev/prode/standings';

    fetch(corsAnywhere + yourUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return <div className='App'></div>;
}

export default App;
