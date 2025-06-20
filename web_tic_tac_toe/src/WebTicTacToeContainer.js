import React, { useState } from "react";
import "./WebTicTacToeContainer.css";

// PUBLIC_INTERFACE
function WebTicTacToeContainer() {
  /**
   * Main container for the WebTicTacToe game.
   * Applies a retro/arcade theme and classic pixel font.
   */
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next move: X");

  // PUBLIC_INTERFACE
  const calculateWinner = squares => {
    // Classic Tic Tac Toe winning lines
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Click for each square
  const handleClick = idx => {
    if (board[idx] || calculateWinner(board)) return;
    const nextBoard = board.slice();
    nextBoard[idx] = xIsNext ? "X" : "O";
    const winner = calculateWinner(nextBoard);

    setBoard(nextBoard);
    if (winner) {
      setStatus(`🏆 Winner: ${winner}`);
    } else if (nextBoard.every(Boolean)) {
      setStatus("It's a draw!");
    } else {
      setXIsNext(!xIsNext);
      setStatus(`Next move: ${xIsNext ? "O" : "X"}`);
    }
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    setBoard(emptyBoard);
    setXIsNext(true);
    setStatus("Next move: X");
  };

  // Square component with retro class
  function Square({ value, onClick }) {
    return (
      <button className="ttt-square retro-pixel" onClick={onClick} aria-label={`Square ${value ? value : "empty"}`}>
        {value}
      </button>
    );
  }

  // Board grid
  function Board() {
    return (
      <div className="ttt-board">
        {board.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>
    );
  }

  return (
    <div className="tic-tac-toe-container retro-pixel retro-border">
      <h2 className="ttt-title retro-pixel retro-gradient-text">TIC TAC TOE</h2>
      <Board />
      <div className="ttt-status retro-pixel">{status}</div>
      <button className="ttt-reset-btn retro-pixel" onClick={resetGame}>RESTART</button>
      <div className="retro-flourish"></div>
    </div>
  );
}

export default WebTicTacToeContainer;
