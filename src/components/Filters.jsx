import '../scss/components/Filters.scss';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function Filters({
  onChangeName,
  valueName,
  onChangeHuman,
  onChangeAlien,
  filterSpeciesAlienChecked,
  filterSpeciesHumanChecked,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="filtersSection">
      <form className="filtersSection__form" onSubmit={handleSubmit}>
        <FilterByName onChangeName={onChangeName} valueName={valueName} />
        <FilterBySpecies
          filterSpeciesHumanChecked={filterSpeciesHumanChecked}
          filterSpeciesAlienChecked={filterSpeciesAlienChecked}
          onChangeAlien={onChangeAlien}
          onChangeHuman={onChangeHuman}
        />
      </form>
    </section>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default Filters;
