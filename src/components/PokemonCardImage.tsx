import { useState, useEffect } from "react";

interface PokemonCardImageProps {
  name: string;
  id: number;
  className?: string; // Agregar className para personalización
}

function PokemonCardImage({ name, id, className }: PokemonCardImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }, [id]);

  return (
    <div className={`relative bg-transparent rounded-lg overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default PokemonCardImage;
