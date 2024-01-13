import { useState } from "react";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const POSSIBLE_POKEMONS = 200; // Up to gen 6

  const getPokemon = async ({ id }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites } = await res.json();
    const image = sprites.front_default
    return { name, image, id };
  };

  const getRandomPokemons = async (amount) => {
    const pokemonsToShow = [];

    while (pokemonsToShow.length < amount) {
        const randomId = Math.floor(Math.random() * POSSIBLE_POKEMONS) + 1;

        if (!pokemonsToShow.some(({ id }) => id === randomId)) {
            pokemonsToShow.push({ id: randomId });
        }
    }
    return await Promise.all(pokemonsToShow.map(getPokemon));
  };

  return { pokemons, getRandomPokemons, setPokemons };
}