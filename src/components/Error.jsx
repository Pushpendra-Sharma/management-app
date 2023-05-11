import React from 'react';
import { useRouteError } from 'react-router-dom';
import '../styles/error.css';

const Error = () => {
  const err = useRouteError();
  const { status = 'Error', statusText = 'Some error occured!' } = err;

  return (
    <div className='error-container'>
      <h3 className='error-status'>Status: {status}</h3>
      <h4 className='error-message'>Message: {statusText}</h4>
    </div>
  );
};

export default Error;
