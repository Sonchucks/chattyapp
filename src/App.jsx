import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

let id = 0;

function increment(){
  id++;
  return id;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {username: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: increment(),
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: increment(),
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const newMessage = {id: increment(), username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages});
    }, 3000);
  }

  addMessage = (message) => {
    const newMessage = {
      id: increment(),
      username: message.username,
      content: message.content
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }

  render() {
    const currentUser = this.state.currentUser.username;
    const message = this.state.messages;

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
      </main>
      <ChatBar user={currentUser} addMessage={this.addMessage} />
    </div>
    );
  }
}

export default App;

