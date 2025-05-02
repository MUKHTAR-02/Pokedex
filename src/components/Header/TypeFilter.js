import React from 'react';

const types = [
  'fire', 'water', 'grass', 'electric', 'bug', 'normal',
  'flying', 'poison', 'ground', 'fairy', 'psychic',
  'rock', 'steel', 'ice', 'dragon', 'ghost', 'fighting', 'dark'
];

const TypeFilter = ({ selectedType, setSelectedType }) => (
  <select
    className="rounded-md px-2 py-1 text-sm w-28 sm:w-40"
    value={selectedType}
    onChange={(e) => setSelectedType(e.target.value)}
  >
    <option value="">All Types</option>
    {types.map(type => (
      <option key={type} value={type}>{type}</option>
    ))}
  </select>
);

export default TypeFilter;