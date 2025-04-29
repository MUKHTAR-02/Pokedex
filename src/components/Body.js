import React, { useState, useEffect } from 'react';

const Body = ({ search, selectedType }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();

        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map(t => t.type.name),
            };
          })
        );

        setPokemonList(details);
        setFilteredList(details);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch Pokémon data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedType) {
      filtered = filtered.filter(p => p.types.includes(selectedType));
    }

    setFilteredList(filtered);
  }, [search, selectedType, pokemonList]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-44 flex-col">
        <img
          src="/pokeball.png"
          alt="Loading..."
          className="w-16 h-16 animate-spin"
        />
        <p className="mt-2 text-lg font-semibold text-gray-700">Loading Pokémon...</p>
      </div>
    );
  }

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      {/* Pokémon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredList.map(pokemon => (
          <div
            key={pokemon.id}
            className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl p-4 rounded-2xl text-center transition transform hover:scale-105"
          >
            <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-24 h-24 drop-shadow-md" />
            <h2 className="text-xl font-bold capitalize text-gray-800">{pokemon.name}</h2>
            <p className="text-gray-700">ID: {pokemon.id}</p>
            <p className="text-gray-600">Type: {pokemon.types.join(', ')}</p>
          </div>
        ))}
      </div>

      {filteredList.length === 0 && !loading && (
        <p className="text-center mt-10 text-gray-700 font-medium">
          Unknown Pokémon.
        </p>
      )}
    </div>
  );
};

export default Body;
