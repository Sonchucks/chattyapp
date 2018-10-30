import React, {Component} from 'react';

function ChatBar(props) {
  let user;

  if (props.user) {
    user = props.user;
  } else {
    user = 'Anonymous';
  }
    return (
        <footer className="chatbar">
          <input className="chatbar-username" value={user} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
    );
}


export default ChatBar;

