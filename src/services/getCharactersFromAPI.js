const getCharactersFromAPI = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          picture: character.image,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode.length,
          status: character.status,
        };
      });
      return parsedCharacters;
    });
};

export default getCharactersFromAPI;
