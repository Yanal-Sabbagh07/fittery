import React, { useContext, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { FilterSearchContext } from "../../context/FilterButtonsProvider";

const SearchFilter = () => {
  const [search, setSearch] = useContext(FilterSearchContext);
  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="search-filter">
      <SearchIcon
        style={{
          position: "absolute",
          right: 85,
          top: 10,
          width: 30,
          height: 30,
        }}
      />
      <input
        id="input"
        className="search-input"
        name="searchBar"
        placeholder="Search by Name / Cuisine "
        onChange={handleChange}
        value={search}
      ></input>
    </div>
  );
};

export default SearchFilter;
