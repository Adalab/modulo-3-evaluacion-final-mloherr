import PropTypes from 'prop-types';

function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.picture} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <p>{characterData.species}</p>
    </li>
  );
}
CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired,
};

export default CharacterCard;
