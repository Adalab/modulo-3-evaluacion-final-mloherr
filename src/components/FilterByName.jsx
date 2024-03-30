import PropTypes from 'prop-types';
import '../scss/components/FilterByName.scss';

function FilterByName({ onChangeName, valueName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <div>
      <label className="labelName" htmlFor="name">
        Search characters by name:
      </label>
      <input
        className="labelName_input"
        type="text"
        name="name"
        value={valueName}
        onChange={handleChange}
      />
    </div>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default FilterByName;
