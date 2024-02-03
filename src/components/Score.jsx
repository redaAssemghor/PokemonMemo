import { useEffect, useState } from "react";
import "./style/score.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import usePokemons from "../usePokemon";

function Score({ clicked, high }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setScore(clicked);
  }, [clicked]);

  return (
    <div className="score-container">
      <div className="header">
        <img src="src/assets/pokeball.png" alt="" />
        <h1 className="poke">Poké</h1>
        <h1 className="memo">Memo</h1>
      </div>
      <div className="score-count">
        <p>
          Score:
          <span>{score}</span>
        </p>

        <p className="high-score">
          High Score:
          <span>
            <FontAwesomeIcon icon={faTrophy} />
          </span>
          <span>{high}</span>
        </p>
      </div>
    </div>
  );
}

export default Score;
