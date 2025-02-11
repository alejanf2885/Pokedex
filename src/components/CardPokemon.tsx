import { Pokemon } from "../interfaces/Pokemon.interface";
import PokemonCardImage from "./PokemonCardImage";
import { formatPokemonId } from "../utils/pokemonUtils";

function CardPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="p-2 cursor-pointer rounded-lg transition-all duration-300 bg-gray-200 hover:bg-gray-300 shadow-md">
      <div className="flex items-center p-2">
        <div className="w-24 h-24 flex-shrink-0">
          <PokemonCardImage
            id={pokemon.id}
            name={pokemon.name}
            className="w-full h-full"
          />
        </div>

        {/* Información del Pokémon */}
        <div>
          <div className="font-semibold">{pokemon.name}</div>
          <div className="text-sm text-gray-500">
            {formatPokemonId(pokemon.id)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPokemon;
