import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemonDetails } from '../services/api';

export const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getAllPokemon();
        const urls = results.map(p => p.url);
        const details = await getPokemonDetails(urls);
        const formatted = details.map(p => ({
          id: p.id,
          name: p.name,
          image: p.sprites.front_default,
          types: p.types.map(t => t.type.name),
        }));
        setPokemonList(formatted);
      } catch (e) {
        setError('Failed to load Pokémon');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { pokemonList, loading, error };
};
