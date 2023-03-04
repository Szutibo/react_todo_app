import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='errorTextWrapper'>
      <div>Oops! Something went wrong!</div>
      <button onClick={() => navigate('/home')}>Back to Home Page!</button>
    </div>
  )
}

export default ErrorPage;