import React from 'react';

const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Pikachu"
    className="rounded-md px-2 py-1 text-sm w-28 sm:w-40"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;