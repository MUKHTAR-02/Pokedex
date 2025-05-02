// src/components/Header/Header.js
import React from 'react';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';

const Header = ({
  search, setSearch,
  selectedType, setSelectedType,
  sortOption, setSortOption,
  itemsPerPage, setItemsPerPage
}) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 p-2 border-2 border-black bg-red-600">
      <div className="flex gap-2 flex-wrap items-center">
        <SearchBar search={search} setSearch={setSearch} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
        <select
          className="rounded-md px-2 py-1 text-sm"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="id-asc">ID (Asc)</option>
          <option value="id-desc">ID (Desc)</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="name-desc">Name (Z–A)</option>
        </select>
        <select
          className="rounded-md px-2 py-1 text-sm"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <h1 className="text-white text-lg sm:text-2xl font-bold whitespace-nowrap">Pokédex</h1>
    </header>
  );
};

export default Header;
