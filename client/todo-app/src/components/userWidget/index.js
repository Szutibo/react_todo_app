import React from 'react';
import './style.css';

const UserWidget = (props) => {
  return (
    <div className='widgetWrapper' id={props.id} >
      {props.username}
    </div>
  )
}

export default UserWidget;