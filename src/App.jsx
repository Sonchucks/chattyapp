import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {username: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
    };
    this.socket = new WebSocket(`ws://localhost:3001`);
  }

  componentDidMount() {
    this.socket.onmessage = (event) => {
      const info = this.state;
      const receivedMsg = JSON.parse(event.data);
      const messages = [...this.state.messages, receivedMsg];

      this.setState({messages: messages});
      console.log(this.state)
    };
  }

  addMessage = (message) => {
    const newMessage = {
      username: message.username,
      content: message.content
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  newUser = (user) => {
    this.setState({currentUser: {username: user}})
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
      <ChatBar
        user={currentUser}
        addMessage={this.addMessage}
        newUser={this.newUser}
      />
    </div>
    );
  }
}

export default App;

