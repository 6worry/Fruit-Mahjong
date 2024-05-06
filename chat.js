const ws = new WebSocket("ws://127.0.0.1:3000"); // 웹소켓 주소

ws.onmessage = function(event) { // 메세지 수신에 대한 호출
    const chat = document.getElementById('chat');
    chat.innerHTML += '<p>' + event.data + '</p>';
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    ws.send(message);
    messageInput.value = ''; // 새로 메세지를 다시 입력할 수 있도록 설정
}