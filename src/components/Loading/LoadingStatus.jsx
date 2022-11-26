import React from 'react';

function LoadingStatus() {
  return (
    <div>
      <h2 className='text-center'>Cargando contenido...</h2>
      <div>
        <iframe
          src='https://giphy.com/embed/tXL4FHPSnVJ0A'
          width='480'
          height='317'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default LoadingStatus;
