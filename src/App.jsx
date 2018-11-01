import React, {Component} from 'react';
import NavigationBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {username: ''},
      messages: [],
      users: 0,
    };
    this.socket = new WebSocket(`ws://localhost:3001`);
  }

  componentDidMount() {
    this.socket.onmessage = (event) => {
      const info = this.state;
      const receivedMsg = JSON.parse(event.data);

      switch(receivedMsg.type) {
        case 'incomingMessage':
          const messages = [...this.state.messages, receivedMsg];
          this.setState({messages: messages});
          break;
        case 'incomingNotification':
          const notification = [...this.state.messages, receivedMsg];
          this.setState({messages: notification});
          break;
        case 'numberOfClients':
          this.setState({users: receivedMsg.users});
          break;
        case 'currentUsername':
          console.log(receivedMsg);
          this.setState({currentUser: {username: receivedMsg.name}});
          break;
        default:
          console.log('Unknown event type ' + receivedMsg.type);
      }
    };
  }

  addMessage = (message) => {
    const newMessage = {
      type: 'postMessage',
      username: message.username,
      content: message.content
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  newUser = (user) => {
    const currentUser = this.state.currentUser.username;
    const updateUser = {
      type: 'postNotification',
      username: user,
      content: `${currentUser} has changed their name to  ${user}`
    }
    this.socket.send(JSON.stringify(updateUser));
  }

  render() {
    const currentUser = this.state.currentUser.username;
    const message = this.state.messages;
    const users = this.state.users;

    return (
      <div>
        <NavigationBar users={users} />
        <MessageList message={message} />
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

