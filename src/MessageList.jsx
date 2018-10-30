import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    const messages = this.props.message;
    const listMessages = messages.map((message) => {
      return (
        <div>
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
      )
    });
    return (
      <div className="message">
        {listMessages}
      </div>
    );
  }
}

export default MessageList;



