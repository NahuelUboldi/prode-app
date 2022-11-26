import React from 'react';
import LoadingStatus from './LoadingStatus';
import BrokenStatus from './BrokenStatus';
import './style.css';

function index({ status }) {
  return (
    <div className='loading align-center mt-5 mb-5 w-100'>
      {status === 'loading' ? <LoadingStatus /> : <BrokenStatus />}
    </div>
  );
}

export default index;
