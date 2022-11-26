import React from 'react';
import { Button } from 'react-bootstrap';

function LoadingStatus({ fetchStandings }) {
  return (
    <div className='text-center'>
      <h2 className='text-center'>Algo salió mal... ups</h2>
      <p className='text-center'>
        Te recomendaría que vuelvas a cargar la página
      </p>
      <div>
        <iframe
          src='https://giphy.com/embed/9o9dh1JRGThC1qxGTJ'
          width='480'
          height='357'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>
      </div>
      {fetchStandings && (
        <Button
          variant='primary'
          className='reload-btn'
          onClick={() =>
            fetchStandings('https://pnkwnu.deta.dev/prode/standings')
          }
        >
          Recargar tabla
        </Button>
      )}
    </div>
  );
}

export default LoadingStatus;
