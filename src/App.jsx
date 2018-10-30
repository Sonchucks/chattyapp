import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

const messageList = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};

function getMessages() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => messageList);
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getMessages().then(messageList => {
      this.setState({
        loading: false,
        messageList
      });
    });
  }


  render() {
    const currentUser = messageList.currentUser.name;
    const message = messageList.messages;

    let messages;
    if (this.state.loading) {
      messages = <h1>Loading Messages...</h1>;
    } else {
      messages = <MessageList message={message} />
    }
    return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <main className="messages">
        {messages}
        <Message />
      </main>
      <ChatBar user={currentUser} />
    </div>
    );
  }
}

export default App;

