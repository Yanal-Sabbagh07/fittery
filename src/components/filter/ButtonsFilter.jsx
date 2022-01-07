import React, { useContext } from "react";
import { FilterButtonsContext } from "../../context/FilterButtonsProvider";
import Button from "./Button";
const ButtonsFilter = () => {
  const buttons = ["All", "Open", "Delivery", "Pickup"];

  const [btnSelected, setBtnSelected] = useContext(FilterButtonsContext);
  const handleClick = (id) => {
    return setBtnSelected(id);
  };
  return (
    <div className="buttons-filter">
      <ul>
        {buttons.map((item, index) => (
          <Button
            key={index}
            item={item}
            id={index}
            onChecked={handleClick}
            active={btnSelected === index}
          ></Button>
        ))}
      </ul>
    </div>
  );
};

export default ButtonsFilter;
