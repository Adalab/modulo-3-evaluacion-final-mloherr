import '../scss/App.scss';
// import PropTypes from "prop-types";
import getCharactersFromAPI from '../services/getCharactersFromAPI';
import { useEffect, useState } from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleSearchName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <Header />
      <main>
        <Filters onChangeName={handleSearchName} valueName={filterName} />
        <CharacterList charactersData={filteredCharacters} />
        <CharacterDetail />
      </main>
    </>
  );
}

export default App;
