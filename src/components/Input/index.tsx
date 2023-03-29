import React, { ChangeEvent } from 'react';
import Styles from './InputStyle.module.css'

interface IProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IProps) => {
  const { label, type, value, onChange } = props;
  return (
    <div className={Styles.container}>
      <label>{label}</label>
        <div>
          <input className={Styles.input} type={type} value={value} onChange={onChange} />
        </div>
    </div> 
  )
}

export default Input