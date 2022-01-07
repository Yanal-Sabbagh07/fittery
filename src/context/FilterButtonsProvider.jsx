import React, { createContext, useState } from "react";
export const FilterButtonsContext = createContext();
export const FilterSearchContext = createContext();
const FilterButtonsProvider = ({ children }) => {
  const [button, setButton] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <FilterButtonsContext.Provider value={[button, setButton]}>
      <FilterSearchContext.Provider value={[search, setSearch]}>
        {children}
      </FilterSearchContext.Provider>
    </FilterButtonsContext.Provider>
  );
};

export default FilterButtonsProvider;
