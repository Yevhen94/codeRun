import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button
        type={props.type ? props.type : "button"}
        disabled={props.disabled ? props.disabled : null}
        className={props.className}
        onClick={props.onClick}
        onSubmit={props.onSubmit}
      >
        {props.content ? <span>{props.content}</span> : null}
      </button>
    </>
  );
};

export default Button;
