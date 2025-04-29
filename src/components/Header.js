import React from 'react';

const Header = ({ search, setSearch, selectedType, setSelectedType }) => {
  const types = [
    'fire', 'water', 'grass', 'electric', 'bug', 'normal',
    'flying', 'poison', 'ground', 'fairy', 'psychic',
    'rock', 'steel', 'ice', 'dragon', 'ghost', 'fighting', 'dark'
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-2 border-2 border-black bg-red-600">
      {/* Search & Filter Section */}
      <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
        <input
          type="text"
          placeholder="Pikachu"
          className="rounded-md px-2 py-1 text-sm w-28 sm:w-40"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="rounded-md px-2 py-1 text-sm w-28 sm:w-40"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* App Name */}
      <h1 className="text-white text-lg sm:text-2xl font-bold whitespace-nowrap">
        Pokédex
      </h1>
    </div>
  );
};

export default Header;
