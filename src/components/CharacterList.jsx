import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ charactersData }) {
  return (
    <section>
      <ul>
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
