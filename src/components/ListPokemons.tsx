import { Pokemon } from "../interfaces/Pokemon.interface";
import CardPokemon from "./CardPokemon";

interface PokemonsProps {
    pokemons: Pokemon[]
    onSelect: (pokemon: Pokemon) => void
    pokemonSelected: Pokemon | null;
}

function ListPokemons({ pokemons, onSelect, pokemonSelected }: PokemonsProps) { 
    return (
        <div className="grid grid-cols-1   justify-center ">
            {pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} onSelect={onSelect} isSelected={pokemonSelected?.id === pokemon.id} />
            ))}
        </div>
    );
}


export default ListPokemons;