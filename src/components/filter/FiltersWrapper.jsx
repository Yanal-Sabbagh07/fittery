import React from "react";
import ButtonsFilter from "./ButtonsFilter";
import SearchFilter from "./SearchFilter";
import "./FiltersWrapper.scss";

const FiltersWrapper = () => {
  return (
    <div className="filter-wrapper">
      <SearchFilter />
      <ButtonsFilter />
    </div>
  );
};

export default FiltersWrapper;
