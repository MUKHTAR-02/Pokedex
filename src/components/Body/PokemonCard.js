import React from 'react';

const PokemonCard = ({ pokemon }) => (
  <article className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl p-4 rounded-2xl text-center transition transform hover:scale-105 h-56">
    <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-24 h-24 drop-shadow-md" loading="lazy" />
    <h2 className="text-xl font-bold capitalize text-gray-800">{pokemon.name}</h2>
    <p className="text-gray-700">ID: {pokemon.id}</p>
    <p className="text-gray-600">Type: {pokemon.types.join(', ')}</p>
  </article>
);

export default PokemonCard;
