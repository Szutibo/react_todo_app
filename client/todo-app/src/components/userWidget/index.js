import React from 'react';
import './style.css';

const UserWidget = (props) => {
  return (
    <div className='widgetWrapper' id={props.id} >
      {props.userName}
    </div>
  )
}

export default UserWidget;