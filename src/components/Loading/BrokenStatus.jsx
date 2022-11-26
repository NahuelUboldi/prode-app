import React from 'react';

function LoadingStatus() {
  return (
    <div>
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
    </div>
  );
}

export default LoadingStatus;
