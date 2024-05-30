const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const parsedMessage = JSON.parse(message);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });
});

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) { // 메세지 받았을 때 호출
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         // if (client !== ws && client.readyState === WebSocket.OPEN) {
//         const messageString = message instanceof Buffer ? message.toString('utf-8') : message;
//         client.send(messageString);
//       }
//     });
//   });
// });