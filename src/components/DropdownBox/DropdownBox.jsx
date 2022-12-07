import "./DropdownBox.scss";

const DropdownBox = () => {
  return (
    <div className="dropdown-box">
      <label htmlFor="role-dropdown">Search employee by job role: </label>
      <select
        className="dropdown-box__options"
        name="role-dropdown"
        id="role-dropdown"
      >
        <option value="Junior Software Developer">
          Junior Software Developer
        </option>
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">
          Senior Software Developer
        </option>
        <option value="Project Manager">Project Manager</option>
        <option value="Tester">Tester</option>
      </select>
    </div>
  );
};

export default DropdownBox;
