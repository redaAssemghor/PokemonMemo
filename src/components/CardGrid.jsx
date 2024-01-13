import { useEffect, useState } from "react";
import usePokemons from "../usePokemon";
import Tilt from "react-parallax-tilt";
import uniqid from "uniqid"
import GameOver from "./gameOver";
import Score from "./Score";
import './style/cards.css'

function CardGrid({ num, onNextLevel, onreplayLevel, quit }) {
    const { pokemons, getRandomPokemons, setPokemons } = usePokemons();
    const [visited, setVisited] = useState([]);
    const [keyForRerender, setKeyForRerender] = useState(0);
    const [loss, setLoss] = useState(false)
    const [win, setWin] = useState(false)
    const [highScore, setHighScore] = useState(null)
    const [loadingCadrd, setLoadingCadrd] = useState(false)
    const [count, setCount] = useState(0)
    const [round, setRound] = useState(null)

    useEffect(() => {
        const fetchRandomPokemons = async () => {
            setLoadingCadrd(true)
            const randomPokemons = await getRandomPokemons(num);
            setPokemons(randomPokemons);
            setTimeout(() => {
                setLoadingCadrd(false)
            }, 1000);
        };
        fetchRandomPokemons();
        setRound(num === 4 ? 5 : (num === 8 ? 9 : 13))
    }, [keyForRerender]);

    const handleClick = (pokemonId) => {
        setVisited(prev => {
            const newVisited = [...prev, pokemonId]
            setCount(newVisited.length)
            return newVisited
        })
        if (visited.includes(pokemonId)) {
            if (highScore === null || highScore < visited.length) setHighScore(visited.length)
            setLoss(true)
            setVisited([])
        }
        if (!visited.includes(pokemonId) && visited.length === num) {
            setWin(true)
        }
        setKeyForRerender((prevKey) => prevKey + 1);
    };
    return (
        <div className="displayContainer">
            <Score num={num} clicked={visited.length} high={highScore} count={count}/>
            <p className="round">{count}/{round}</p>
            <div className={num === 4 ? "display4" : (num === 8 ? "display8" : "display12")}>
                {loss && <GameOver finalScore={count} loss={true} nextLevel={onNextLevel} rePlay={onreplayLevel} quit={quit} />}
                {win && <GameOver finalScore={count} win={true} nextLevel={onNextLevel} rePlay={onreplayLevel} quit={quit} />}
                {!loss && !win && pokemons.map((pokemon) => (
                    <div key={uniqid()} className={loadingCadrd ? "loadincard" : "card"}>
                        <Tilt
                        className="tilt"
                        tiltReverse
                        reset
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareColor={"#f1b818"}
                        glarePosition="all"
                    >
                        {loadingCadrd ? '' 
                        : 
                        <>
                        <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            onClick={() => handleClick(pokemon.id)}
                        />
                        <p>{pokemon.name}</p>
                        </>}
                    </Tilt>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardGrid;
