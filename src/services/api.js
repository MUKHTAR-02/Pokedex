const batchFetch = async (urls, batchSize = 10) => {
    const results = [];
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const responses = await Promise.all(
        batch.map(url => fetch(url).then(res => res.json()))
      );
      results.push(...responses);
    }
    return results;
  };
  
  export const getAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
    return data.results;
  };
  
  export const getPokemonDetails = async (urls) => {
    return batchFetch(urls);
  };
  