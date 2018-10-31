import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.user,
      content: ''
    };
    this.contentChange = this.contentChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  nameChange = (event) => {
    this.setState({username: event.target.value});
  }
  contentChange = (event) => {
    this.setState({content: event.target.value});
  };
  onSubmit = (event) => {
    if (event.key === 'Enter') {
      this.props.addMessage(this.state);
      this.setState({content: ''});
    }
  };
  newName = (event) => {
    if (event.key === 'Enter') {
      this.props.newUser(this.state.username);
    }
  };

  render() {
    return (
        <footer className="chatbar">
          <input
            className="chatbar-username"
            type='text'
            value={this.state.username}
            onChange={this.nameChange}
            onKeyPress={this.newName}
          />
          <input
            className="chatbar-message"
            type="text"
            placeholder="Type a message and hit ENTER"
            value={this.state.content}
            onChange={this.contentChange}
            onKeyPress={this.onSubmit}
          />
        </footer>
    );
  }
}

export default ChatBar;
