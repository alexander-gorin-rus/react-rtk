import React, { FC, memo, useCallback, useState } from 'react';
import './styles.css'
import { IInputProps } from './types';

const InputComponent: FC<IInputProps> = memo(({
  type,
  title,
  placeholder,
  error,
  onChange,
  ...anyProps
}) => {
  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, e.target.value);
  }, []);
  
  return (
    <div className='inputWrapper'>
      <span>{title}</span>
      <input
        {...anyProps}
        className='input'
        type={type}
        placeholder={placeholder}
        onChange={onHandleChange}
      />
      {error && <p className='inputError'>{error}</p>}
    </div>
  )
})

export default InputComponent;
