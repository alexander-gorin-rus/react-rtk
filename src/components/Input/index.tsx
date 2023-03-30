import React from "react";
import Styles from "./InputStyle.module.css";
import { IProps } from "./types";

const Input = (props: IProps) => {
  const { label, type, value, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        className={Styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
