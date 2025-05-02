// src/App.js
import React, { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import PokemonGrid from './components/Body/PokemonGrid';
import { usePokemonData } from './hooks/usePokemonData';

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortOption, setSortOption] = useState('id-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const { pokemonList, loading, error } = usePokemonData();

  const filteredList = useMemo(() => {
    let list = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType ? pokemon.types.includes(selectedType) : true)
    );

    switch (sortOption) {
      case 'id-desc':
        list.sort((a, b) => b.id - a.id);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        list.sort((a, b) => a.id - b.id);
    }

    return list;
  }, [pokemonList, search, selectedType, sortOption]);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const paginatedList = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredList.slice(start, start + itemsPerPage);
  }, [filteredList, currentPage, itemsPerPage]);

  return (
    <main>
      <Header
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        sortOption={sortOption}
        setSortOption={setSortOption}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <PokemonGrid
        pokemonList={paginatedList}
        loading={loading}
        error={error}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default App;
