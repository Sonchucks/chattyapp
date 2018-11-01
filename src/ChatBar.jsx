import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
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

  // Validates input field making sure users aren't just inputting empty fields or fields with just whitespace

  inputValidation = (input) => {
    if (input.trim() === '') {
      return true;
    } else {
      return false;

    }
  };

  // Called when user clicks enter in the message field

  onSubmit = (event) => {
    if (event.key === 'Enter') {
      const text = this.state.content;
      const newMessage = {
        username: this.props.user,
        content: text,
      };
      if (this.inputValidation(text)) {
        alert('Enter a valid message!');
        this.setState({content: ''});
      } else {
      this.props.addMessage(newMessage);
      this.setState({content: ''});
      }
    }
  };

  // Called when user clicks enter in the username field

  newName = (event) => {
    const username = this.state.username;
    if (event.key === 'Enter') {
      if (this.inputValidation(username)) {
        alert('Enter a valid username!');
        this.setState({username: ''});
      } else {
        this.props.newUser(username);
        this.setState({username: ''});
        this.refs.messageInput.focus();
      }
    }
  };

  render() {
    return (
        <footer className='chatbar'>
          <input
            className='chatbar-username'
            type='text'
            placeholder={this.props.user}
            value={this.state.username}
            onChange={this.nameChange}
            onKeyPress={this.newName}
          />
          <input
            className='chatbar-message'
            ref='messageInput'
            type='text'
            placeholder='Type a message and hit ENTER'
            value={this.state.content}
            onChange={this.contentChange}
            onKeyPress={this.onSubmit}
          />
        </footer>
    );
  }
}

export default ChatBar;
