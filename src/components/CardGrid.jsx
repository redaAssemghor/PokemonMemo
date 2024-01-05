import { useEffect, useState } from "react";
import usePokemons from "../usePokemon";
import Tilt from "react-parallax-tilt";
import uniqid from "uniqid"
import LostScreen from "./LostScreen";
import Score from "./Score";

function CardGrid({ num }) {
    const { pokemons, getRandomPokemons, setPokemons } = usePokemons();
    const [visited, setVisited] = useState([]);
    const [keyForRerender, setKeyForRerender] = useState(0);
    const [lost, setLost] = useState(false)
    const [highScore, setHighScore] = useState(null)


    useEffect(() => {
        const fetchRandomPokemons = async () => {
            const randomPokemons = await getRandomPokemons(num);
            setPokemons(randomPokemons);
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
        console.log('claflsa')
    }
    return (
        <div>
            {lost && <LostScreen startOver={startOver}/>}
                <Score num={visited.length} high={highScore}/>
                {!lost && pokemons.map((pokemon) => (
                    <Tilt
                        key={uniqid()}
                        tiltReverse
                        reset
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor={"#f1b818"}
                        glarePosition="all"
                    >
                        <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            onClick={() => handleClick(pokemon.id)}
                        />
                    </Tilt>
                ))}
        </div>
    );
}

export default CardGrid;
