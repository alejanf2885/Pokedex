import ListPokemons from "./components/ListPokemons";
import SearchBar from "./components/SearchBar";
import { Pokemon } from "./interfaces/Pokemon.interface";
import { useEffect, useState } from "react";

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    height: 0.7,
    weight: 6.9,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["grass", "poison"],
    stats: { hp: 60, attack: 62, defense: 63, speed: 60 },
    height: 1,
    weight: 13,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    stats: { hp: 80, attack: 82, defense: 83, speed: 80 },
    height: 2,
    weight: 100,
    abilities: ["overgrow", "chlorophyll"],
    evolutionChain: [1, 2, 3],
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    stats: { hp: 39, attack: 52, defense: 43, speed: 65 },
    height: 0.6,
    weight: 8.5,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["fire"],
    stats: { hp: 58, attack: 64, defense: 58, speed: 80 },
    height: 1.1,
    weight: 19,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    stats: { hp: 78, attack: 84, defense: 78, speed: 100 },
    height: 1.7,
    weight: 90.5,
    abilities: ["blaze", "solar-power"],
    evolutionChain: [4, 5, 6],
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    stats: { hp: 44, attack: 48, defense: 65, speed: 43 },
    height: 0.5,
    weight: 9,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["water"],
    stats: { hp: 59, attack: 63, defense: 80, speed: 58 },
    height: 1,
    weight: 22.5,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    stats: { hp: 79, attack: 83, defense: 100, speed: 78 },
    height: 1.6,
    weight: 85.5,
    abilities: ["torrent", "rain-dish"],
    evolutionChain: [7, 8, 9],
  },
  {
    id: 10,
    name: "Caterpie",
    types: ["bug"],
    stats: { hp: 45, attack: 30, defense: 35, speed: 45 },
    height: 0.3,
    weight: 2.9,
    abilities: ["shield-dust", "run-away"],
    evolutionChain: [10, 11, 12],
  },
  {
    id: 11,
    name: "Metapod",
    types: ["bug"],
    stats: { hp: 50, attack: 20, defense: 55, speed: 30 },
    height: 0.7,
    weight: 9.9,
    abilities: ["shed-skin"],
    evolutionChain: [10, 11, 12],
  },
  {
    id: 12,
    name: "Butterfree",
    types: ["bug", "flying"],
    stats: { hp: 60, attack: 45, defense: 50, speed: 70 },
    height: 1.1,
    weight: 32,
    abilities: ["compound-eyes", "tinted-lens"],
    evolutionChain: [10, 11, 12],
  },
];


function App() {
  const [search, setSearch] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (search === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPokemons(filteredPokemons);
    }
  }, [search]);

  return (
    <>
      <div className="container flex flex-col items-center">
        <SearchBar setSearch={setSearch} />
        <ListPokemons pokemons={filteredPokemons} />
      </div>
    </>
  );
}

export default App;
