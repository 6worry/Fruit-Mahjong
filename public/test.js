function shuffle(card) {
    for (let i = card.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [card[i], card[j]] = [card[j], card[i]];
    }

    return card;
}

function generateMahjongTiles() {
    const cards = [];
    for (let i = 1; i <= 135; i++) {
        cards.push(i);
    }
    shuffle(cards);
    console.log(cards);
    return cards;
}

function printCard(cardInfo) { // 테스트케이스용
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `뽑은 카드: ${JSON.stringify(cardInfo)}`;
}

let shuffledTiles = generateMahjongTiles();
let currentTileIndex = 0;
let cardCount = 0;

function drawCard() {
    if (currentTileIndex < shuffledTiles.length) {
        const cardValue = shuffledTiles[currentTileIndex];
        const cardInfo = {
            turn: currentTileIndex + 1,
            card: cardValue
        };

        const message = {
            type: 'drawCard',
            cardInfo: cardInfo
        };
        ws.send(JSON.stringify(message));

        currentTileIndex++;
        cardCount++;
    } else {
        alert("더 이상 카드가 없습니다.");
    }
}

function displayCard(cardInfo) {
    printCard(cardInfo);

    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = cardInfo.card;

    const containers = ['#bottom', '#right', '#top', '#left'];
    const container = document.querySelector(containers[(cardInfo.turn - 1) % 4]);
    container.appendChild(card);
}