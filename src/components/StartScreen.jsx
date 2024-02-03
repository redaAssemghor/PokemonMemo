import React, { useState } from "react";
import "./style/startScreen.css";

function StartScreen({ getMode }) {
  const [difficulty, setDifficulty] = useState(null);

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  };

  const handleChoice = (e) => {
    e.preventDefault();

    if (difficulty !== null) {
      // Map difficulty level to the corresponding mode value
      const mode = {
        easy: 4,
        medium: 8,
        hard: 12,
      }[difficulty];

      getMode(mode);
    }
  };

  return (
    <div className="container">
      <div className="start">
        <div className="">
          <p className="typing">What would you like to do?</p>
          <form className="form" onSubmit={handleChoice}>
            {["easy", "medium", "hard"].map((level) => (
              <label key={level}>
                <input
                  type="radio"
                  name="difficulty"
                  value={level}
                  checked={difficulty === level}
                  onChange={() => handleDifficultyChange(level)}
                />
                <div className="spans">
                  <span className="custom-radio"></span>
                  <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                </div>
              </label>
            ))}
            <button>START GAME</button>
          </form>
          <a
            href="https://github.com/redaAssemghor/PokemonMemo"
            target="-blank"
            rel="noopener noreferrer"
          >
            GITHUB REPO
          </a>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
