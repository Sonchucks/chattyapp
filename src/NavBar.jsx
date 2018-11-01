import React, {Component} from 'react';

function NavigationBar({users}) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span className="users-online">Users Online: {users}</span>
    </nav>
  )
}

export default NavigationBar;
