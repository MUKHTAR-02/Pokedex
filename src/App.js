import React, { useState } from 'react';
import Header from './components/Header/Header';
import PokemonGrid from './components/Body/PokemonGrid';
import { usePokemonData } from './hooks/usePokemonData';

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const { pokemonList, loading, error } = usePokemonData();

  const filteredList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedType ? pokemon.types.includes(selectedType) : true)
  );

  return (
    <main>
      <Header
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <PokemonGrid
        pokemonList={filteredList}
        loading={loading}
        error={error}
      />
    </main>
  );
};

export default App;
