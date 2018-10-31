import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    const messages = this.props.message;
    const listMessages = messages.map((message) => {
      console.log(message.type);
      switch (message.type) {
        case 'incomingNotification':
          return (
            <div className="notification" key={message.id}>
              <span className="notification-content">{message.content}</span>
            </div>
          )
          break;
        case 'incomingMessage':
          return (
            <div className="message" key={message.id}>
              <span className="message-username" style={{color:message.color}}>{message.username}</span>
              <span className="message-content">{message.content}</span>
            </div>
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



