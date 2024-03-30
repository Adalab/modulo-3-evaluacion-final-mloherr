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
    <div className="filterMainContainerSpecies">
      <h3>Filtrar por especie:</h3>
      <label className="labelSpecies" htmlFor="humanSpecie">
        Human
        <input
          type="checkbox"
          className="labelSpecies__input"
          value="Human"
          id="humanSpecie"
          onChange={handleChangeHuman}
          checked={filterSpeciesHumanChecked}
        />
      </label>
      <label className="labelSpecies" htmlFor="alienSpecie">
        Alien
        <input
          type="checkbox"
          className="labelSpecies__input"
          value="Alien"
          id="alienSpecie"
          onChange={handleChangeAlien}
          checked={filterSpeciesAlienChecked}
        />
      </label>
    </div>
  );
}

export default FilterBySpecies;
