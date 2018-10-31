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

let clients = {};

const randomColor = () => {
  const hexVar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let hexColor = [0, 0, 0, 0, 0, 0, 0];

  hexColor = hexColor.map(hexCode => hexVar[Math.floor(Math.random() * 16)]);
  hexColor[0] = '#';
  return hexColor.join('');
};

const addNewClient = ( ws, username = 'Anonymous' ) => {
  const clientID = uuid();
  ws.clientID = clientID;
  clients[clientID] = {
    ws,
    username,
    color: randomColor(),
  };
};


const removeClient = ( ws ) => {
  const clientID = ws.clientID;
  console.log(clientID);
  delete clients[clientID];
};

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  let numberOfClients = {
    type: "numberOfClients",
    users: Object.keys(clients).length + 1,
  };

  addNewClient(ws);
  console.log(numberOfClients)
  wss.broadcast(numberOfClients);

  ws.on('message', function incoming(message) {
    const receivedMsg = JSON.parse(message);
    receivedMsg.id = uuid();

    switch (receivedMsg.type) {
      case 'postMessage':
        receivedMsg.type = "incomingMessage";
        console.log(receivedMsg);
        wss.broadcast(receivedMsg);
        break;
      case 'postNotification':
        receivedMsg.type = "incomingNotification";
        console.log(receivedMsg);
        wss.broadcast(receivedMsg);
        break;
      default:
        console.log('Unkown message type');
    }
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    removeClient(ws);
    let numberOfClients = {
      type: "numberOfClients",
      users: Object.keys(clients).length + 1,
    };
    wss.broadcast(numberOfClients);
  });

});
