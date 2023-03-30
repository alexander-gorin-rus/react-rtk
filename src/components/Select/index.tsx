import React, { useState } from 'react';
import { ISelectProps, SelectEnum } from './types';

const SelectInput: React.FC<ISelectProps> = ({ label, value, onChange, options, chequeType }) => {
  const [selectedOption, setSelectedOption] = useState<SelectEnum>(SelectEnum.Option0);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as SelectEnum;
    setSelectedOption(value);
  };

  return (
    <>
      <label>{label}</label>
      <select style={{border: "1px solid red", width: "100%"}} value={selectedOption} onChange={handleSelectChange}>
        <option value={SelectEnum.Option0}>0</option>
        <option value={SelectEnum.Option1}>1</option>
      </select>
    </>
    
  );
};

export default SelectInput;