function shuffle(card) {
    // Fisher-Yates 알고리즘을 사용하여 배열을 섞음
    for (let i = card.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [card[i], card[j]] = [card[j], card[i]];
    }

    return card;
}

function generateMahjongTiles() {
    const cards = [];

    for (let i = 1; i <= 135; i++) { // 135개의 각 카드를 표현
        cards.push(i);
    }

    shuffle(cards);
    console.log(cards);
    return cards;
}

function printCard(card) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `뽑은 카드: ${card}`;
    
}

let shuffledTiles = generateMahjongTiles();
let currentTileIndex = 0;

function drawCard() {
    // 마작 카드를 하나씩 뽑아 출력
    if (currentTileIndex < shuffledTiles.length) {
        const card = shuffledTiles[currentTileIndex];
        printCard(card);
        currentTileIndex++;
    } else {
        alert("더 이상 카드가 없습니다."); // 모든 카드를 뽑았을 경우
    }
}