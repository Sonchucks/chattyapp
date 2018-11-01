import React, {Component} from 'react';

function Message({message}) {
  return (
    <div className="message" key={message.id}>
      <span className="message-username" style={{color:message.color}}>{message.username}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}

export default Message;
