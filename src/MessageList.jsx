import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    const messages = this.props.message;
    const listMessages = messages.map((message) => {
      return (
        <div className="message" key={message.id}>
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
      )
    });
    return (
      <main className="messages">
        {listMessages}
      </main>
    );
  }
}

export default MessageList;



