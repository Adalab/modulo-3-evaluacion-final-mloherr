import '../scss/App.scss';
// import PropTypes from "prop-types";
import getCharactersFromAPI from '../services/getCharactersFromAPI';
import localStorage from '../services/localStorage';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorage.get('userSearch') || ''
  );
  const [filterSpecies, setFilterSpecies] = useState([]);
  const [filterSpeciesAlienChecked, setFilterSpeciesAlienChecked] =
    useState(false);
  const [filterSpeciesHumanChecked, setFilterSpeciesHumanChecked] =
    useState(false);

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleSearchName = (value) => {
    setFilterName(value);
    localStorage.set('userSearch', value);
  };

  const handleChangeHuman = (value) => {
    setFilterSpeciesHumanChecked(value);
    if (value) {
      setFilterSpecies([...filterSpecies, 'Human']);
    } else {
      setFilterSpecies(filterSpecies.filter((species) => species !== 'Human'));
    }
  };
  const handleChangeAlien = (value) => {
    setFilterSpeciesAlienChecked(value);
    if (value) {
      setFilterSpecies([...filterSpecies, 'Alien']);
    } else {
      setFilterSpecies(filterSpecies.filter((species) => species !== 'Alien'));
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecies.length === 0) {
        return true;
      } else {
        return filterSpecies.includes(character.species);
      }
    });

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath('/character/:idCharacter', pathname);
  const idCharacter = characterDetailRoute
    ? characterDetailRoute.params.idCharacter
    : null;
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
                  onChangeHuman={handleChangeHuman}
                  onChangeAlien={handleChangeAlien}
                  valueCheckBoxAliens={filterSpeciesAlienChecked}
                  valueCheckBoxHumans={filterSpeciesHumanChecked}
                />
                {filteredCharacters.length === 0 ? (
                  <div>
                    {`No hay ningún personaje que coincida con ${filterName}`}
                  </div>
                ) : (
                  <CharacterList charactersData={filteredCharacters} />
                )}
              </>
            }
          />
          <Route
            path="/character/:idCharacter"
            element={
              characterDetailData ? (
                <CharacterDetail characterDetailData={characterDetailData} />
              ) : (
                <p>El personaje que buscas no existe 🥲 </p>
              )
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
