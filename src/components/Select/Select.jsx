const Select = (props) => {
  const { options, selectedValue, onChange } = props;

  const renderOptions = () => {
    if (options && options.length <= 0) {
      return null;
    }
    return options.map((option, index) => {
      return (
        <option
          key={index}
          value={index}
          // onClick={(e) => console.log(e)}
          // value={selectedValue.value === option.value}
          className={` dropdown-content${
            selectedValue.value === option.value ? "selected" : ""
          }`}
        >
          {option.label}
        </option>
      );
    });
  };
  return (
    <>
      <select
        aria-label="select"
        className="dropdown-button"
        onChange={(e) => onChange(e.target.value)}
      >
        {renderOptions()}
      </select>
    </>
  );
};

export default Select;
