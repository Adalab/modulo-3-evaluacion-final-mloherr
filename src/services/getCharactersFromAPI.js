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
      const orderedParsedCharacters = parsedCharacters.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
      return orderedParsedCharacters;
    });
};

export default getCharactersFromAPI;
