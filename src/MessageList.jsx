import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

function MessageList({message}) {
  const listMessages = message.map((message) => {
    switch (message.type) {
      case 'incomingNotification':
        return (
          <Notification message={message} key={message.id} />
        );
        break;
      case 'incomingMessage':
        return (
          <Message message={message} key={message.id} />
        );
        break;
      default:
        console.log('Unknown message type');
    }
  });
  return (
    <main className='messages'>
      {listMessages}
    </main>
  );
}


export default MessageList;