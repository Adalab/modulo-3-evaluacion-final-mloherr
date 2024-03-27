import PropTypes from 'prop-types';
import '../scss/components/FilterBySpecies.scss';

function FilterBySpecies({ onChangeSpecies }) {
  const handleChangeSpecies = (ev) => {
    onChangeSpecies(ev.target.value);
  };
  return (
    <>
      <h3>Filtrar por especie:</h3>
      <label className="label" htmlFor="humanSpecie">
        Human
      </label>
      <input
        type="checkbox"
        className="label__input"
        value="Human"
        id="humanSpecie"
        onChange={handleChangeSpecies}
      />
      <label className="label" htmlFor="alienSpecie">
        Alien
      </label>
      <input
        type="checkbox"
        className="label__input"
        value="Alien"
        id="alienSpecie"
        onChange={handleChangeSpecies}
      />
    </>
  );
}

FilterBySpecies.propTypes = {
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default FilterBySpecies;
