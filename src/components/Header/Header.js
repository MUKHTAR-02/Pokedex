import React from 'react';
import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';

const Header = ({ search, setSearch, selectedType, setSelectedType }) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 p-2 border-2 border-black bg-red-600">
      <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
        <SearchBar search={search} setSearch={setSearch} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      <h1 className="text-white text-lg sm:text-2xl font-bold whitespace-nowrap">Pokédex</h1>
    </header>
  );
};

export default Header;