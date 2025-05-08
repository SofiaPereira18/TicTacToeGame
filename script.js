const winningCombinations = [
    [0, 1, 2], // linha 1
    [3, 4, 5], // linha 2
    [6, 7, 8], // linha 3
    [0, 3, 6], // coluna 1
    [1, 4, 7], // coluna 2
    [2, 5, 8], // coluna 3
    [0, 4, 8], // diagonal 1
    [2, 4, 6], // diagonal 2
];

let board = ["", "", "", "", "", "", "", "", ""]; 

const cells = Array.from(document.querySelectorAll('.cell'));
let currentPlayer = "X";

cells.forEach( (cell, index) => {
    cell.addEventListener("click", () => {
        // se a celula ja estiver selecionada, nao faz nada
        if(cell.textContent !== "") return;

        cell.textContent = currentPlayer;
        board[index] = currentPlayer;
        
        // verifica se existe vitoria
        if(checkWinner(currentPlayer)) {
            alert(`Jogador ${currentPlayer} ganhou!`);
            return;
        }

        // muda o jogador currente
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});


function checkWinner(player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}