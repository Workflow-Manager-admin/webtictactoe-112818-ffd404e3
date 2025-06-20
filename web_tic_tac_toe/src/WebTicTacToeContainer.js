import React, { useState } from "react";
import "./WebTicTacToeContainer.css";

// PUBLIC_INTERFACE
function WebTicTacToeContainer() {
  /**
   * Main container for the WebTicTacToe game.
   * Centers the board, applies accent colors, and manages game state.
   * Real-time updates are simulated with React state.
   */
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next move: X");

  // Helper: Check for a winner
  const calculateWinner = squares => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // Rows
      [0,3,6],[1,4,7],[2,5,8], // Columns
      [0,4,8],[2,4,6]          // Diagonals
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

  // Handle a user clicking a square
  const handleClick = idx => {
    if (board[idx] || calculateWinner(board)) return;
    const nextBoard = board.slice();
    nextBoard[idx] = xIsNext ? "X" : "O";
    const winner = calculateWinner(nextBoard);

    setBoard(nextBoard);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (nextBoard.every(Boolean)) {
      setStatus("Draw!");
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

  // Board Square
  function Square({ value, onClick }) {
    return (
      <button className="ttt-square" onClick={onClick} aria-label={`Square ${value ? value : "empty"}`}>
        {value}
      </button>
    );
  }

  // Board
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
    <div className="tic-tac-toe-container">
      <h2 className="ttt-title">Tic Tac Toe</h2>
      <Board />
      <div className="ttt-status">{status}</div>
      <button className="ttt-reset-btn" onClick={resetGame}>Restart</button>
    </div>
  );
}

export default WebTicTacToeContainer;
