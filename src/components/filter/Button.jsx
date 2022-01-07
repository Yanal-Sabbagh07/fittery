import React from "react";

const Button = (props) => {
  return (
    <li
      className={props.active ? "active" : ""}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
};

export default Button;
