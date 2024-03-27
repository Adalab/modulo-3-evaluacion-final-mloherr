import '../scss/App.scss';
// import PropTypes from "prop-types";
import getCharactersFromAPI from '../services/getCharactersFromAPI';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
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

  // Saber ID de la ruta del PJ

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath('/character/:idCharacter', pathname);
  const idCharacter = characterDetailRoute
    ? characterDetailRoute.params.idCharacter
    : null;
  //Buscar el Pj cuyo ID sea = al id de la ruta
  const characterDetailData = characters.find(
    (character) => character.id === parseInt(idCharacter)
  );

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  onChangeName={handleSearchName}
                  valueName={filterName}
                />
                <CharacterList charactersData={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:idCharacter"
            element={
              <CharacterDetail characterDetailData={characterDetailData} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
