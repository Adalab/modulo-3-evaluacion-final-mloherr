import PropTypes from 'prop-types';
import '../scss/components/FilterBySpecies.scss';

function FilterBySpecies({
  filterSpeciesAlienChecked,
  filterSpeciesHumanChecked,
  onChangeHuman,
  onChangeAlien,
}) {
  const handleChangeHuman = (ev) => {
    onChangeHuman(ev.currentTarget.checked);
  };

  const handleChangeAlien = (ev) => {
    onChangeAlien(ev.currentTarget.checked);
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
        onChange={handleChangeHuman}
        checked={filterSpeciesHumanChecked}
      />
      <label className="label" htmlFor="alienSpecie">
        Alien
      </label>
      <input
        type="checkbox"
        className="label__input"
        value="Alien"
        id="alienSpecie"
        onChange={handleChangeAlien}
        checked={filterSpeciesAlienChecked}
      />
    </>
  );
}

export default FilterBySpecies;
