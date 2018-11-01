const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on ${ PORT }`)
    );

const wss = new SocketServer({ server });

const clients = {};

// Generate a random hex color code.

const randomColor = () => {
  const hexVar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let hexColor = [0, 0, 0, 0, 0, 0, 0];

  hexColor = hexColor.map(hexCode => hexVar[Math.floor(Math.random() * 16)]);
  hexColor[0] = '#';
  return hexColor.join('');
};

// Add a new client to client object called upon connection

const addNewClient = (ws, username = 'Anonymous') => {
  const clientID = uuid();
  ws.clientID = clientID;
  clients[clientID] = {
    ws,
    username,
    color: randomColor(),
  };
};

// Remove a client from the client object upon disconnection

const removeClient = (ws) => {
  const clientID = ws.clientID;
  delete clients[clientID];
};

// Takes the message object and updates it before sending back to client

const newMessage = (message, userColor) => {
  message.type = 'incomingMessage';
  message.color = userColor;

  return message;
};

// When user changes name on client side, updates username in client object

const updateUser = (message, ws) => {
  clients[ws.clientID].username = message.username;
  message.type = 'incomingNotification';
  delete message.username;

  return message;
};

// Sends back new username for client

const setClientName = (input) => {
  const clientName = {
    type: 'currentUsername',
    name: input.username
  };
  return clientName;
};

const numberOfUsers = () => {
  const numberOfClients = {
    type: 'numberOfClients',
    users: Object.keys(clients).length,
  };
  return numberOfClients;
};

// Broadcast data to all connected clients

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};


wss.on('connection', (ws) => {
  console.log('Client connected');

  addNewClient(ws);

  wss.broadcast(numberOfUsers());

  ws.send(JSON.stringify(setClientName(clients[ws.clientID])));

  ws.on('message', function incoming(message) {
    const userColor = clients[ws.clientID].color;
    const receivedMsg = JSON.parse(message);
    receivedMsg.id = uuid();

    switch (receivedMsg.type) {
      case 'postMessage':
        wss.broadcast(newMessage(receivedMsg, userColor));
        break;
      case 'postNotification':
        ws.send(JSON.stringify(setClientName(receivedMsg)));
        wss.broadcast(updateUser(receivedMsg, ws));
        break;
      default:
        console.log('Unkown message type');
    }
  });
  ws.on('close', () => {
    console.log('Client disconnected');
    removeClient(ws);
    wss.broadcast(numberOfUsers());
  });

});
