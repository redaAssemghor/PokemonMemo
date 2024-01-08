import { useEffect, useState } from "react";
import usePokemons from "../usePokemon";
import Tilt from "react-parallax-tilt";
import uniqid from "uniqid"
import LostScreen from "./LostScreen";
import Score from "./Score";
import './style/cards.css'

function CardGrid({ num }) {
    const { pokemons, getRandomPokemons, setPokemons } = usePokemons();
    const [visited, setVisited] = useState([]);
    const [keyForRerender, setKeyForRerender] = useState(0);
    const [lost, setLost] = useState(false)
    const [highScore, setHighScore] = useState(null)
    const [loadingCadrd, setLoadingCadrd] = useState(false)


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
    }, [keyForRerender]);

    const handleClick = (pokemonId) => {
        setVisited(prev => [...prev, pokemonId])
        console.log(visited, pokemonId)
        if (visited.includes(pokemonId)) {
            console.log('u lost')
            if (highScore === null || highScore < visited.length) setHighScore(visited.length);
            setLost(true)
            setVisited([])
        }
        setKeyForRerender((prevKey) => prevKey + 1);
    };

    const startOver = () => {
        setLost(false)
        setKeyForRerender((prevKey) => prevKey + 1);
    }
    return (
        <div className="displayContainer">
            <Score num={visited.length} high={highScore}/>
            <div className={num === 4 ? "display4" : (num === 8 ? "display8" : "display12")}>
                {lost && <LostScreen startOver={startOver}/>}
                {!lost && pokemons.map((pokemon) => (
                    <Tilt
                        className={loadingCadrd ? "loadincard" : "card"}
                        key={uniqid()}
                        tiltReverse
                        reset
                        glareEnable={true}
                        glareMaxOpacity={0.4}
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
                ))}
            </div>
        </div>
    );
}

export default CardGrid;
