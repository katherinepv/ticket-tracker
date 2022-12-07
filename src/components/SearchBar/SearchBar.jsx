import "./SearchBar.scss";

// const nameSearch = document.querySelector("#name-search");

// const filterTeamArr = () => {
//   const filteredTeamArr = team.filter((element) => {
//     return element.name.includes("Alima");
//   });
// };

const SearchBar = () => {
  //   const nameSearchInput = prop.nameSearchInput;
  return (
    <>
      <label htmlFor="name-search">Search for employee name: </label>
      <input id="name-search" type="text" />
    </>
  );
};

export default SearchBar;
