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

!["Initial look of ChattyApp"]()

### Username is automatically set to Anonymous.

!["Username field default"]()

### Can enter a new username and click the 'Enter' key to update. The current username will become the placeholder of the field along with a notification message appearing in the chat.

!["New username entered into field"]()
!["Username field after clicking 'Enter'"]()

### Can enter a text in the message input field and click the 'Enter' key to post the message.

!["Empty message input field"]()
!["Message input field with a value"]()

### Your posted message will appear in the chat with your username before it. Each user has a random color assigned to them on connection which persists even when the user changes name.

!["Posted message"]()
!["Persisting username color"]()
!["Another user connected with a different color assigned"]()

### The amount of users that are connected will be displayed in the top right hand corner and will update as soon as a new user connects.

!["Number of users online"]()

### You will get an alert error message if you ever try to submit an empty field or a field with only spaces.

!["Error for empty message"]()
!["Error for empty username"]()

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