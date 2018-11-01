# ChattyAPP

ChattyApp is a single page web chat application focusing primarily on the client-side experience and built with ReactJS.

## Stack
- Webpack
  - Babel
  - JSX
  - ES6
  - Webpack Dev Server (came with boilerplate)
- WebSockets
  - Node Package `ws` server-side
  - Native `WebSocket` client-side
- ReactJS

## Final Product

### What you'll see when you first load the page.

!["Initial look of ChattyApp"](https://github.com/Sonchucks/chattyapp/blob/master/docs/initial-look.png)

### Username is automatically set to Anonymous.

!["Username field default"](https://github.com/Sonchucks/chattyapp/blob/master/docs/username-field.png)

### Can enter a new username and click the 'Enter' key to update. The current username will become the placeholder of the field along with a notification message appearing in the chat.

!["New username entered into field"](https://github.com/Sonchucks/chattyapp/blob/master/docs/new-name.png)
!["Username field after clicking 'Enter'"](https://github.com/Sonchucks/chattyapp/blob/master/docs/new-name-as-placeholder.png)
!["Notification message of updated username"](https://github.com/Sonchucks/chattyapp/blob/master/docs/notification-message.png)

### Can enter a text in the message input field and click the 'Enter' key to post the message.

!["Empty message input field"](https://github.com/Sonchucks/chattyapp/blob/master/docs/empty-message-field.png)
!["Message input field with a value"](https://github.com/Sonchucks/chattyapp/blob/master/docs/message-field-with-value.png)

### Your posted message will appear in the chat with your username before it. Each user has a random color assigned to them on connection which persists even when the user changes name.

!["Posted message"](https://github.com/Sonchucks/chattyapp/blob/master/docs/posted-message.png)
!["Persisting username color"](https://github.com/Sonchucks/chattyapp/blob/master/docs/persisting-username-color.png)
!["Another user connected with a different color assigned"](https://github.com/Sonchucks/chattyapp/blob/master/docs/new-user-connected.png)

### The amount of users that are connected will be displayed in the top right hand corner and will update as soon as a new user connects.

!["Number of users online 1"](https://github.com/Sonchucks/chattyapp/blob/master/docs/users-online-1.png)
!["Number of users online 2"](https://github.com/Sonchucks/chattyapp/blob/master/docs/users-online-2.png)

### You will get an alert error message if you ever try to submit an empty field or a field with only spaces.

!["Error for empty message"](https://github.com/Sonchucks/chattyapp/blob/master/docs/error-message.png)
!["Error for empty username"](https://github.com/Sonchucks/chattyapp/blob/master/docs/error-username.png)

## Dependencies

### Client Side

- Babel (Core, Loader, es2015, react, stage-0)
- CSS Loader
- ESLint
- Node SASS
- SASS Loader
- SockJS-Client
- Style Loader
- WebPack

### Server Side

- Express
- UUID
- WebSocket

## Getting Started

- Open up two terminals, one for the client side and one for the server.
  - Server folder (chatty_server) is located inside the root folder.
- Make sure to install all the dependencies using the npm install command for both.
- Run the both servers using `npm start` command.
- Open up your broswer and connect to http://0.0.0.0:3000.