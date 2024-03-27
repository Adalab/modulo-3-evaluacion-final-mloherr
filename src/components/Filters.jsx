import '../scss/components/Filters.scss';
import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function Filters({
  onChangeName,
  valueName,
  onChangeSpecies,
  valueSpecies,
  species,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="filtersSection">
      <form className="filtersSection__form" onSubmit={handleSubmit}>
        <FilterByName onChangeName={onChangeName} valueName={valueName} />
        <FilterBySpecies onChangeSpecies={onChangeSpecies} />
      </form>
    </section>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default Filters;
