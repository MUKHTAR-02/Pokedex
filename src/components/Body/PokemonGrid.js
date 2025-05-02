import React from 'react';
import PokemonCard from './PokemonCard';

const SkeletonCard = () => (
  <div className="animate-pulse p-4 rounded-lg bg-gray-200 h-40 w-full"></div>
);

const PokemonGrid = ({ pokemonList, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">{error}</p>;
  }

  if (pokemonList.length === 0) {
    return <p className="text-center mt-10 text-gray-700 font-medium">Unknown Pokémon.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
