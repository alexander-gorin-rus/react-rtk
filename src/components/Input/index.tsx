import React, { ChangeEvent } from "react";
import Styles from "./InputStyle.module.css";

interface IProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

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
