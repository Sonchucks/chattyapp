import React, {Component} from 'react';

function Notification({message}) {
  return (
    <div className="notification" key={message.id}>
      <span className="notification-content">{message.content}</span>
    </div>
  )
}

export default Notification;

