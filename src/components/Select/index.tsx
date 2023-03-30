import React, { useState } from "react";
import { ISelectProps, SelectEnum } from "./types";
import Styles from "./SelectStyles.module.css";

const SelectInput: React.FC<ISelectProps> = ({ label }) => {
  const [selectedOption, setSelectedOption] = useState<SelectEnum>(
    SelectEnum.Option0
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as SelectEnum;
    setSelectedOption(value);
  };

  return (
    <>
      <label>{label}</label>
      <select
        className={Styles.select}
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value={SelectEnum.Option0}>0</option>
        <option value={SelectEnum.Option1}>1</option>
      </select>
    </>
  );
};

export default SelectInput;
