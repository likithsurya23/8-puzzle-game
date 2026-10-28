import { useState } from "react";
import "./App.css";

const initial = [1, 2, 3, 4, 0, 6, 7, 5, 8];
const goal = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export default function App() {
  const [tiles, setTiles] = useState(initial);
  const [moves, setMoves] = useState(0);

  function moveTile(index) {
    const empty = tiles.indexOf(0);
    const adjacent =
      Math.abs(Math.floor(index / 3) - Math.floor(empty / 3)) +
        Math.abs((index % 3) - (empty % 3)) ===
      1;

    if (!adjacent) return;

    const next = [...tiles];
    [next[index], next[empty]] = [next[empty], next[index]];
    setTiles(next);
    setMoves((count) => count + 1);
  }

  function resetGame() {
    setTiles(initial);
    setMoves(0);
  }

  const won = tiles.every((tile, index) => tile === goal[index]);

  return (
    <main className="container">
      <h1>8 Puzzle Game</h1>
      <p>Arrange the numbers from 1 to 8 in order.</p>

      <div className="board" aria-label="Puzzle board">
        {tiles.map((tile, index) => (
          <button
            key={index}
            className={tile === 0 ? "tile empty" : "tile"}
            onClick={() => moveTile(index)}
            aria-label={tile === 0 ? "Empty space" : `Tile ${tile}`}
            disabled={won || tile === 0}
          >
            {tile || ""}
          </button>
        ))}
      </div>

      <h3>Moves: {moves}</h3>
      {won && <h2 className="won">You Won!</h2>}

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </main>
  );
}
