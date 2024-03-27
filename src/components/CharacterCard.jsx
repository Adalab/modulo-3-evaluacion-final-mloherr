import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <img src={characterData.picture} alt={characterData.name} />
        <h4>{characterData.name}</h4>
        <p>{characterData.species}</p>
      </Link>
    </li>
  );
}
CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired,
};

export default CharacterCard;
