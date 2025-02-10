import ListPokemons from "./components/ListPokemons"
import { Pokemon } from "./interfaces/Pokemon.interface"

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45
    },
    height: 0.7,
    weight: 6.9,
    abilities: ['overgrow', 'chlorophyll'],
    evolutionChain: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Ivysaur',
    types: ['grass', 'poison'],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      speed: 60
    },
    height: 1,
    weight: 13,
    abilities: ['overgrow', 'chlorophyll'],
    evolutionChain: [1, 2, 3]
  },
 
];


function App() {
  

  return (
    <>
     <ListPokemons pokemons={pokemons}/>
    </>
  )
}

export default App
