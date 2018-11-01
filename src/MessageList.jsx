import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.message;
    const listMessages = messages.map((message) => {
      console.log(message.type);
      switch (message.type) {
        case 'incomingNotification':
          return (
            <Notification message={message} />
          )
          break;
        case 'incomingMessage':
          return (
            <Message message={message} />
          )
          break;
        default:
          console.log('Unknown message type')
      }

    });
    return (
      <main className="messages">
        {listMessages}
      </main>
    );
  }
}

export default MessageList;



