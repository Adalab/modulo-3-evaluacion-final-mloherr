import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../scss/components/CharacterCard.scss';

function CharacterCard({ characterData }) {
  return (
    <li className="characterData">
      <Link to={`/character/${characterData.id}`}>
        <figure className="characterData__image">
          <img src={characterData.picture} alt={characterData.name} />
        </figure>
        <h4 className="characterData__name">{characterData.name}</h4>
        <p className="characterData__specie">{characterData.species}</p>
      </Link>
    </li>
  );
}
CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired,
};

export default CharacterCard;
