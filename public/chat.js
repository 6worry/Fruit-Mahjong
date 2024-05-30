const ws = new WebSocket("ws://127.0.0.1:3000"); // 웹소켓 주소

ws.onmessage = function(event) { // 메세지 수신에 대한 호출
    const message = JSON.parse(event.data);
    if (message.type === 'chat') {
        const chat = document.getElementById('chat');
        chat.innerHTML += '<p>' + message.content + '</p>';
    } else if (message.type === 'drawCard') {
        displayCard(message.cardInfo);
    }
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = {
        type: 'chat',
        content: messageInput.value
    };

    ws.send(JSON.stringify(message));
    messageInput.value = ''; // 새로 메세지를 다시 입력할 수 있도록 설정
}