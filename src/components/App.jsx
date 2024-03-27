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

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Filters />
        <CharacterList charactersData={characters} />
        <CharacterDetail />
      </main>
    </>
  );
}

// NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };

export default App;
