import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../scss/components/CharacterList.scss';

function CharacterList({ charactersData }) {
  return (
    <section className="charactersSection">
      <ul className="charactersSection__list">
        {charactersData.map((character) => {
          return <CharacterCard key={character.id} characterData={character} />;
        })}
      </ul>
    </section>
  );
}
CharacterList.propTypes = {
  charactersData: PropTypes.array.isRequired,
};

export default CharacterList;
