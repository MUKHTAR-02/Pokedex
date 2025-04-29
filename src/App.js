import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  // controlled via parent component 
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Body
        search={search}
        selectedType={selectedType}
      />
    </div>
  );
};

export default App;
