import { Pokemon } from "../interfaces/Pokemon.interface";
import PokemonCardImage from "./PokemonCardImage";
import { formatPokemonId } from "../utils/pokemonUtils";

function CardPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="p-2 cursor-pointer rounded-lg transition-all duration-300 bg-gray-200 hover:bg-gray-300 shadow-md 
                    lg:p-4 xl:p-6 lg:w-80 xl:w-96 m-1">
      <div className="flex items-center p-2 lg:p-4 xl:p-6">
        {/* Imagen del Pokémon con tamaños responsivos */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 flex-shrink-0">
          <PokemonCardImage
            id={pokemon.id}
            name={pokemon.name}
            className="w-full h-full"
          />
        </div>

        {/* Información del Pokémon */}
        <div className="ml-2 lg:ml-4">
          <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{pokemon.name}</div>
          <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-500">{formatPokemonId(pokemon.id)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardPokemon;
