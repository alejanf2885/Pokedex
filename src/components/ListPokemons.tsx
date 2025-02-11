import { Pokemon } from "../interfaces/Pokemon.interface";
import CardPokemon from "./CardPokemon";

interface PokemonsProps {
    pokemons: Pokemon[]
}

function ListPokemons({ pokemons }: PokemonsProps) { 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}


export default ListPokemons;