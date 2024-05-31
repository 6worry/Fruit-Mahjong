const express = require("express");
const path = require("path");

const app = express();
const port = 3000; 

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// 서버 설정
const server = app.listen(port, () => {
  console.log(`port: ${port}`);
});

// WebSocket 설정
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });
let player = 1;

wss.on('connection', function connection(ws) {
  // 새로운 메세지 타입을 만들어서 플레이어가 최초로 들어올때 plyernum을 전송한다.
  ws.on('message', function incoming(message) {
    const parsedMessage = JSON.parse(message);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
        console.log(parsedMessage);
      }
    });
  });
  player++;
});
