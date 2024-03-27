import '../scss/components/Filters.scss';

function Filters({ onChangeName, valueName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <form className="form">
      <label className="form__label" htmlFor="name">
        Search characters by name:
      </label>
      <input
        className="form__label--input"
        type="text"
        name="name"
        value={valueName}
        onChange={handleChange}
      />
    </form>
  );
}

export default Filters;
